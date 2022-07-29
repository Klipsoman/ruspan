export const checkMobile = {
  android() {
    return navigator.userAgent.match(/Android/i);
  },
  blackBerry() {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  opera() {
    return navigator.userAgent.match(/Opeta Mini/i);
  },
  windows() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  isMobile() {
    return (
      this.android() ||
      this.blackBerry() ||
      this.iOS() ||
      this.opera() ||
      this.windows()
    )
  }
};