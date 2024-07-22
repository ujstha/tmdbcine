export const baseSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 8,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

export const generateCarouselSettings = (options = {}) => {
  const { slidesToShow, slidesToScroll, ...restOptions } = options;
  const customSettings = {
    ...baseSettings,
    slidesToShow: slidesToShow ?? baseSettings.slidesToShow,
    slidesToScroll: slidesToScroll ?? baseSettings.slidesToScroll,
    responsive: baseSettings.responsive.map((breakpointSetting) => ({
      ...breakpointSetting,
      settings: {
        ...breakpointSetting.settings,
        slidesToShow:
          options[`breakpoint_${breakpointSetting.breakpoint}_slidesToShow`] ??
          breakpointSetting.settings.slidesToShow,
        slidesToScroll:
          options[
            `breakpoint_${breakpointSetting.breakpoint}_slidesToScroll`
          ] ??
          options[`breakpoint_${breakpointSetting.breakpoint}_slidesToShow`] ??
          breakpointSetting.settings.slidesToScroll,
      },
    })),
    ...restOptions,
  };
  return customSettings;
};
