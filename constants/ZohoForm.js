"use client";
import React, { useEffect } from "react";

const ZohoForm = ({ containerId, formUrl }) => {
  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;

    // clear old content if re-render
    container.innerHTML = "";

    // create iframe
    const f = document.createElement("iframe");
    let ifrmSrc = formUrl.includes("?") ? formUrl + "&zf_rszfm=1" : formUrl + "?zf_rszfm=1";

    try {
      // Handle UTM params (Zoho tracking)
      if (typeof window.ZFAdvLead !== "undefined" && typeof window.zfutm_zfAdvLead !== "undefined") {
        for (let prmIdx = 0; prmIdx < window.ZFAdvLead.utmPNameArr.length; prmIdx++) {
          let utmPm = window.ZFAdvLead.utmPNameArr[prmIdx];
          utmPm =
            window.ZFAdvLead.isSameDomian &&
            window.ZFAdvLead.utmcustPNameArr.indexOf(utmPm) === -1
              ? "zf_" + utmPm
              : utmPm;
          const utmVal = window.zfutm_zfAdvLead.zfautm_gC_enc(window.ZFAdvLead.utmPNameArr[prmIdx]);
          if (utmVal) {
            ifrmSrc += (ifrmSrc.includes("?") ? "&" : "?") + utmPm + "=" + utmVal;
          }
        }
      }

      if (typeof window.ZFLead !== "undefined" && typeof window.zfutm_zfLead !== "undefined") {
        for (let prmIdx = 0; prmIdx < window.ZFLead.utmPNameArr.length; prmIdx++) {
          const utmPm = window.ZFLead.utmPNameArr[prmIdx];
          const utmVal = window.zfutm_zfLead.zfutm_gC_enc(window.ZFLead.utmPNameArr[prmIdx]);
          if (utmVal) {
            ifrmSrc += (ifrmSrc.includes("?") ? "&" : "?") + utmPm + "=" + utmVal;
          }
        }
      }
    } catch (e) {
      console.warn("Zoho UTM params handling failed", e);
    }

    f.src = ifrmSrc;
    f.style.border = "none";
    f.style.height = "868px";
    f.style.width = "100%"; // same as Zoho snippet
    f.style.transition = "all 0.5s ease";
    f.setAttribute("aria-label", "Zoho Form");
    f.setAttribute("allow", "geolocation;");
    container.appendChild(f);

    // handle resizing via Zoho postMessage
    const handleMessage = (event) => {
      const evntData = event.data;
      if (evntData && typeof evntData === "string") {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px";
          const iframe = container.getElementsByTagName("iframe")[0];

          if (iframe && iframe.src.includes("formperma") && iframe.src.includes(zf_perma)) {
            const prevIframeHeight = iframe.style.height;
            let zf_tout = false;

            if (zf_ifrm_data.length === 3) {
              iframe.scrollIntoView();
              zf_tout = true;
            }

            if (prevIframeHeight !== zf_ifrm_ht_nw) {
              if (zf_tout) {
                setTimeout(() => {
                  iframe.style.height = zf_ifrm_ht_nw;
                }, 500);
              } else {
                iframe.style.height = zf_ifrm_ht_nw;
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage, false);

    return () => {
      window.removeEventListener("message", handleMessage, false);
      if (container) container.innerHTML = "";
    };
  }, [containerId, formUrl]);

  // just return the target container
  return <div id={containerId} style={{ width: "100%" }} />;
};

export default ZohoForm;
