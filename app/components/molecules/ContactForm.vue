<script setup lang="ts">
// Definimos un estado simple para el formulario
const formData = ref({
  nombre: "",
  email: "",
  telefono: "",
  servicio: "",
  mensaje: "",
});

const servicios = [
  "Tratamientos Faciales",
  "Masajes y Bienestar",
  "Depilación Láser",
  "Manicura y Pedicura",
  "Otros",
];

type FormStatus = "idle" | "loading" | "success" | "error" | "rate-limited";
const status = ref<FormStatus>("idle");
const errorMessage = ref("");

const handleSubmit = async () => {
  status.value = "loading";
  errorMessage.value = "";

  try {
    await $fetch("/api/contact", {
      method: "POST",
      body: {
        nombre: formData.value.nombre,
        telefono: formData.value.telefono,
        servicio: formData.value.servicio,
        mensaje: formData.value.mensaje,
      },
    });

    status.value = "success";
    formData.value = {
      nombre: "",
      email: "",
      telefono: "",
      servicio: "",
      mensaje: "",
    };
  } catch (err: any) {
    if (err?.statusCode === 429) {
      status.value = "rate-limited";
      errorMessage.value =
        err?.data?.message ||
        "Has enviado demasiadas solicitudes. Por favor, espera unos minutos.";
    } else {
      status.value = "error";
      const apiErrors: string[] = err?.data?.data?.errors;
      errorMessage.value = apiErrors?.length
        ? apiErrors.join(" ")
        : "Ha ocurrido un error. Por favor, inténtalo de nuevo.";
    }
  }
};
</script>

<template>
  <div
    class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-brand-secondary/20 h-full flex flex-col justify-center">
    <div class="mb-8">
      <h3 class="font-display text-3xl text-brand-dark mb-2">Escríbenos</h3>
      <p class="text-brand-muted text-sm uppercase tracking-widest">
        Solicita tu cita o información
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div class="flex flex-col gap-2">
          <label
            class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted ml-4"
            >Nombre Completo</label
          >
          <input
            v-model="formData.nombre"
            type="text"
            required
            placeholder="Ej: María García"
            class="w-full px-6 py-4 rounded-full bg-estetica-soft border border-brand-accent/10 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-brand-muted/40" />
        </div>
        <div class="flex flex-col gap-2">
          <label
            class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted ml-4"
            >Teléfono</label
          >
          <input
            v-model="formData.telefono"
            type="tel"
            required
            placeholder="600 000 000"
            class="w-full px-6 py-4 rounded-full bg-estetica-soft border border-brand-accent/10 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all placeholder:text-brand-muted/40" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label
          class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted ml-4"
          >Tratamiento de Interés</label
        >
        <div class="relative">
          <select
            v-model="formData.servicio"
            class="w-full px-6 py-4 rounded-full bg-estetica-soft border border-brand-accent/10 focus:border-brand-primary outline-none transition-all appearance-none text-brand-dark">
            <option value="" disabled selected>Selecciona un servicio</option>
            <option v-for="item in servicios" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
          <div
            class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-primary">
            <Icon name="ph:caret-down-bold" />
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label
          class="text-[10px] uppercase tracking-[0.2em] font-bold text-brand-muted ml-4"
          >Mensaje o Dudas</label
        >
        <textarea
          v-model="formData.mensaje"
          rows="4"
          placeholder="Cuéntanos qué necesitas..."
          class="w-full px-6 py-5 rounded-[2rem] bg-estetica-soft border border-brand-accent/10 focus:border-brand-primary outline-none transition-all resize-none placeholder:text-brand-muted/40"></textarea>
      </div>

      <div class="pt-4">
        <!-- Success message -->
        <div
          v-if="status === 'success'"
          class="w-full bg-green-50 border border-green-200 text-green-800 py-5 rounded-2xl text-center font-medium flex items-center justify-center gap-2">
          <Icon name="ph:check-circle-fill" class="w-5 h-5" />
          Solicitud enviada. Te contactaremos pronto.
        </div>

        <!-- Rate-limit or error message -->
        <div
          v-else-if="status === 'rate-limited' || status === 'error'"
          class="mb-4 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-2xl text-sm flex items-start gap-2">
          <Icon name="ph:warning-fill" class="w-5 h-5 shrink-0 mt-0.5" />
          {{ errorMessage }}
        </div>

        <button
          v-if="status !== 'success'"
          type="submit"
          :disabled="status === 'loading' || status === 'rate-limited'"
          class="w-full bg-brand-primary text-white py-5 rounded-full font-bold text-lg shadow-lg hover:bg-brand-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0">
          <span>{{
            status === "loading" ? "Enviando…" : "Enviar Solicitud"
          }}</span>
          <Icon
            :name="
              status === 'loading'
                ? 'ph:circle-notch'
                : 'ph:paper-plane-tilt-fill'
            "
            class="w-5 h-5"
            :class="{ 'animate-spin': status === 'loading' }" />
        </button>
      </div>
    </form>
  </div>
</template>
