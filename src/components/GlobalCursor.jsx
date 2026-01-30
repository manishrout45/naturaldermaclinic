import { useEffect } from "react";
import "../index.css";

export default function GlobalCursor() {
  useEffect(() => {
    // Main cursor
    const cursor = document.createElement("div");
    cursor.classList.add("cursor-circle");
    document.body.appendChild(cursor);

    // Trailing circles
    const trailCount = 5;
    const trails = [];
    for (let i = 0; i < trailCount; i++) {
      const t = document.createElement("div");
      t.classList.add("cursor-trail");
      document.body.appendChild(t);
      trails.push({ el: t, x: 0, y: 0 });
    }

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    const speed = 0.15;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Main cursor smooth movement
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;

      // Distance for scale/opacity
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const scale = Math.min(1, Math.max(0.4, distance / 120));
      const opacity = Math.min(0.8, Math.max(0.2, 1 - distance / 400));

      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%) scale(${scale})`;
      cursor.style.opacity = opacity;

      // Trail animation
      trails.forEach((trail, i) => {
        trail.x += (currentX - trail.x) * (0.1 + i * 0.05);
        trail.y += (currentY - trail.y) * (0.1 + i * 0.05);
        trail.el.style.transform = `translate(${trail.x}px, ${trail.y}px) translate(-50%, -50%) scale(${0.6 - i * 0.1})`;
        trail.el.style.opacity = `${0.3 - i * 0.05}`;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      trails.forEach(t => t.el.remove());
    };
  }, []);

  return null;
}
