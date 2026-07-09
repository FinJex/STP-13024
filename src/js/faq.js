const faqTriggers = document.querySelectorAll('[data-faq-trigger]');

faqTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId = trigger.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    trigger.setAttribute('aria-expanded', String(!isExpanded));

    if (panel) {
      panel.hidden = isExpanded;
    }
  });
});