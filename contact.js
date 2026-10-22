(() => {
  'use strict';
  // Endpoint público del formulario verificado. No contiene credenciales.
  const endpoint = 'https://formspree.io/f/mrppzyqp';
  const form = document.getElementById('contact-form');
  if (!form || !/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) return;
  const submit = form.querySelector('button[type="submit"]');
  const status = document.getElementById('contact-status');
  form.action = endpoint;
  form.removeAttribute('enctype');
  submit.textContent = 'Enviar solicitud';
  document.getElementById('contact-notice').textContent = 'Al enviar, Formspree procesará tu nombre, correo y los datos que incluyas para trasladar tu consulta a H&C Clean Pro. No incluyas datos sensibles ni códigos de acceso. También puedes escribir directamente a hyccleanpro@gmail.com.';
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled || !form.reportValidity()) return;
    submit.disabled = true;
    submit.textContent = 'Enviando…';
    status.textContent = 'Enviando tu solicitud…';
    form.setAttribute('aria-busy', 'true');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', body: new FormData(form),
        headers: {Accept: 'application/json'}, signal: controller.signal
      });
      const result = await response.json();
      if (!response.ok || result.ok !== true) throw new Error('Submission failed');
      status.textContent = 'El servicio ha recibido tu solicitud para H&C Clean Pro. El precio y la disponibilidad están pendientes de confirmación.';
      form.reset();
    } catch {
      status.textContent = 'No hemos podido confirmar el envío. Tus datos siguen en el formulario. Puedes reintentarlo o escribir a hyccleanpro@gmail.com. Si ya se recibió, un reintento podría duplicar la solicitud.';
    } finally {
      clearTimeout(timeout);
      submit.disabled = false;
      submit.textContent = 'Enviar solicitud';
      form.removeAttribute('aria-busy');
    }
  });
})();
