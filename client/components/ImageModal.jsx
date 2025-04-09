// src/components/ImageModal.js
import React, { useState, useEffect } from "react";
import {
  FiX,
  FiZoomIn,
  FiZoomOut,
  FiRotateCw,
  FiRotateCcw,
  FiExternalLink,
} from "react-icons/fi";

const ImageModal = ({ imageUrl, onClose }) => {
  const [zoom, setZoom] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === " ") setZoom((z) => !z);
      if (e.key === "ArrowRight") setRotation((r) => (r + 90) % 360);
      if (e.key === "ArrowLeft") setRotation((r) => (r - 90 + 360) % 360);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    setZoom(false);
    setRotation(0);
    setIsLoading(true);
  }, [imageUrl]);

  return (
    <div
      className="fixed inset-0 bg-transparent z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

      <div
        className="relative max-w-6xl w-full h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-3 bg-black/70 text-white rounded-t-lg">
          <div className="flex gap-2">
            <button
              onClick={() => setZoom((z) => !z)}
              className="p-2 hover:bg-white/10 rounded-md transition-all"
              aria-label={zoom ? "Zoom out" : "Zoom in"}
            >
              {zoom ? (
                <FiZoomOut size={20} className="text-emerald-400" />
              ) : (
                <FiZoomIn size={20} />
              )}
            </button>
            <button
              onClick={() => setRotation((r) => (r + 90) % 360)}
              className="p-2 hover:bg-white/10 rounded-md transition-all"
              aria-label="Rotate right"
            >
              <FiRotateCw size={20} />
            </button>
            <button
              onClick={() => setRotation((r) => (r - 90 + 360) % 360)}
              className="p-2 hover:bg-white/10 rounded-md transition-all"
              aria-label="Rotate left"
            >
              <FiRotateCcw size={20} />
            </button>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-white/10 rounded-md transition-all"
              aria-label="Open in new tab"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-red-600/80 rounded-md transition-all"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="flex relative bg-transparent overflow-auto">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <div className="w-10 h-10 border-4 border-gray-600 border-t-emerald-500 rounded-full animate-spin" />
            </div>
          )}
          <img
            src={imageUrl}
            alt="Zoomed content"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            className={`w-full h-full object-contain transition-transform duration-300 ${
              zoom ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            onClick={() => setZoom((z) => !z)}
            style={{
              transform: `scale(${zoom ? 1.5 : 1}) rotate(${rotation}deg)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
