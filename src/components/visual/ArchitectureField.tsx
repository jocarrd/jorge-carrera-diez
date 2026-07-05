"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 64;

export function ArchitectureField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const points = new Float32Array(NODE_COUNT * 3);

    for (let index = 0; index < NODE_COUNT; index += 1) {
      const column = (index % 8) - 3.5;
      const row = Math.floor(index / 8) - 3.5;
      const offset = Math.sin(index * 1.9) * 0.16;

      points[index * 3] = column * 0.62 + offset;
      points[index * 3 + 1] = row * 0.38 + Math.cos(index * 1.3) * 0.1;
      points[index * 3 + 2] = Math.sin(index * 0.8) * 0.8;
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute("position", new THREE.BufferAttribute(points, 3));

    const nodeMaterial = new THREE.PointsMaterial({
      color: "#67e8f9",
      size: 0.035,
      transparent: true,
      opacity: 0.75,
    });

    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodes);

    const linePositions: number[] = [];

    for (let index = 0; index < NODE_COUNT - 1; index += 1) {
      if (index % 3 === 0 || index % 8 === 0) {
        const from = index * 3;
        const to = (index + 1) * 3;

        linePositions.push(
          points[from],
          points[from + 1],
          points[from + 2],
          points[to],
          points[to + 1],
          points[to + 2],
        );
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3),
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: "#22d3ee",
      transparent: true,
      opacity: 0.18,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const ringGeometry = new THREE.RingGeometry(2.35, 2.36, 160);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: "#67e8f9",
      transparent: true,
      opacity: 0.08,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = 0.9;
    scene.add(ring);

    let animationFrame = 0;

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };

    const animate = () => {
      const elapsed = performance.now() * 0.001;

      nodes.rotation.y = Math.sin(elapsed * 0.25) * 0.08;
      lines.rotation.y = nodes.rotation.y;
      ring.rotation.z = elapsed * 0.045;

      renderer.render(scene, camera);

      if (!prefersReducedMotion) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    resize();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div ref={mountRef} className="absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_62%_43%,transparent_0%,rgba(2,4,10,0.45)_45%,rgba(2,4,10,0.92)_82%)]" />
    </div>
  );
}
