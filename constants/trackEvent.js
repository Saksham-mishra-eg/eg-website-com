export const trackEvent = ({ action, category, label, value }) => {
  if (typeof window.gtag !== "undefined") {
    const eventParams = {
      event_category: category,
      event_label: label,
    };

    if (typeof value !== "undefined") {
      eventParams.value = value;
    }

    window.gtag("event", action, eventParams);
  } else {
    console.warn("gtag is not defined");
  }
      console.log("Tracking event:", { action, category, label, value });
};
