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

const handleSubmit = () => {
  console.log("Datos enviados:", formData.value);
  alert("Gracias por contactar. Te responderemos pronto.");
};
</script>

<template>
  <div
    class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-brand-secondary/20 h-full flex flex-col justify-center">
    <div class="mb-8">
      <h3 class="font-display text-3xl text-brand-dark mb-2 italic">
        Escríbenos
      </h3>
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
        <button
          type="submit"
          class="w-full bg-brand-primary text-white py-5 rounded-full font-bold text-lg shadow-lg hover:bg-brand-dark transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
          <span>Enviar Solicitud</span>
          <Icon name="ph:paper-plane-tilt-fill" class="w-5 h-5" />
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.font-display {
  font-family: "Playfair Display", serif;
}
</style>
