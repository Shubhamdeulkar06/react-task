import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

const CargoSlider2 = ({ images, numCells }) => {
  const pickerRef = useRef(null);
  const cellsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(Draggable);
    gsap.defaults({
      ease: "none",
    });

    const picker = pickerRef.current;
    const cells = cellsRef.current;
    const proxy = document.createElement("div");

    const cellWidth = 405;
    const rotation = -90;

    const numImages = images.length;
    const cellStep = 1 / numImages;
    const wrapWidth = cellWidth * numImages;
    const wrapIndex = gsap.utils.wrap(0, cells.length);

    const baseTl = gsap.timeline({ paused: true });

    gsap.set(picker, {
      perspective: 1100,
      width: wrapWidth - cellWidth,
    });

    cells.forEach((cell, i) => {
      initCell(cell, i);
    });

    const animation = gsap
      .timeline({ repeat: -1, paused: true })
      .add(baseTl.tweenFromTo(1, 2))
      .progress(1);

    const draggable = new Draggable(proxy, {
      allowContextMenu: true,
      type: "x",
      trigger: picker,
      inertia: true,
      onDrag: updateProgress,
      onThrowUpdate: updateProgress,
      snap: {
        x: snapX,
      },
      onDragEnd: function () {
        const i = wrapIndex((-this.endX / wrapWidth) * numImages - 3);
        console.log(i);
      },
    });

    function snapX(x) {
      return Math.round(x / cellWidth) * cellWidth;
    }

    function updateProgress() {
      let newProg = this.x / wrapWidth;
      newProg = newProg - Math.floor(newProg);
      animation.progress(newProg);
    }

    function initCell(element, index) {
      gsap.set(element, {
        width: cellWidth,
        scale: 0.9,
        opacity: 0.5,
        rotation: rotation,
        x: -cellWidth,
      });

      const tl = gsap
        .timeline({ repeat: 1 })
        .to(element, 1, { x: "+=" + wrapWidth, rotation: -rotation }, 0)
        .to(
          element,
          cellStep,
          { scale: 1, opacity: 1, repeat: 1, yoyo: true },
          0.5 - cellStep
        );

      baseTl.add(tl, index * -cellStep);
    }
  }, [images, numCells]);

  return (
    <div className="main">
      <div id="picker" className="picker" ref={pickerRef}>
        {images.map((image, index) => (
          <div
            className="cell"
            key={index}
            ref={(el) => (cellsRef.current[index] = el)}
          >
            <div className="cell-content">
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CargoSlider2;
