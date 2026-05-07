import { useEffect } from "react";

const SECTION_IDS = ["home", "about", "services", "team", "donate", "footer"];

export default function ScrollRouteSync() {
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    if (!sections.length) return;

    let activeId = "";

    const updateHash = (id) => {
      if (!id || id === activeId) return;
      activeId = id;
      const nextHash = `#${id}`;
      if (window.location.hash !== nextHash) {
        window.history.replaceState(null, "", nextHash);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const id = visibleEntries[0].target.id;
          updateHash(id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.4, 0.6, 0.75],
        rootMargin: "-20% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
