/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    lenis: any;
  }
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sử dụng requestAnimationFrame để đảm bảo scroll xảy ra sau khi DOM updated
    requestAnimationFrame(() => {
      if (window.lenis) {
        // Sử dụng Lenis để scroll mượt mà về đầu trang
        window.lenis.scrollTo(0, {
          immediate: false, // Cho phép smooth scrolling
          duration: 1.2, // Điều chỉnh thời gian scroll nếu cần
          force: true, // Đảm bảo scroll ngay cả khi đã ở vị trí đầu
        });
      } else {
        // Fallback nếu Lenis không khả dụng
        window.scrollTo(0, 0);
      }
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
