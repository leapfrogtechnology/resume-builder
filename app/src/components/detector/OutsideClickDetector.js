/* eslint-disable */
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref.
 */
function useOutsideClickDetector(ref, onClose) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
function OutsideClickDetector(props) {
  const wrapperRef = useRef(null);
  useOutsideClickDetector(wrapperRef, props.onClose);

  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideClickDetector.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func,
};

export default OutsideClickDetector;
