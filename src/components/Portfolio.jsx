import React from 'react';
import { motion } from 'framer-motion';

const portfolioImages = [
  [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuSY2Z7nw1MRi08KyPD3aNdOWqIgDgOM2HoNJtU0nuQUM4n27QSCdb3adqm0RODgpKUxuxdzOW9R2iBXNOvqgIMwefz_dhcC6luBCe2F66czeLatbu-DdjzfdN6XronvqIo1q60QWwjgmRFD60R6XyXt-q5787AVr6xdLGkd2IZ15o2Qd2TPuvyjf_PU8FVDCGSGZIzWPFuPxZijBiamNAdcxLMo9sh1HxT0Wd2B1XPqSpLhXWaTn-XgTYi5da0-QLol8hWnNTu3Y", height: "h-64", alt: "Close up of floral wedding centerpiece" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCg6O8fz_91HbWfeRKbm0UVGGGbSvH6zbiHJSst0CfoB7pL6IHlZoNt2DzanTa7RgGXQydu9xNd6Vap8Fek47TtwsJvhySAys5g1IydyrdukQn9c89YZYfE-Hl2FNLSghCY0itNhc1DLoUyYCR2rfHOxYrlPudtekeZUJZlQ-IOQ-u7Zq7cS7Jur8W3rtbtsJrXfPo2itm0-gtveEXQgx9FqAwF_PZlD9ISQ_8WMBop3Af7ARTjebqvuc5y9qqDTxcYfpaqJktcRAs", height: "h-96", alt: "Evening party lights and outdoor decor" }
  ],
  [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvG_8P9NiDwP-dyj28y-Y2PCnVbdxEH3V6YX9EmsL9WLZseQm5JRE2_-FMdoULCgtSxRre9M9312T7GkUbHwjoTGjitp_6UsqR-bkEVQMZ_a4AvHPKOyBlT7t4cDrO_AvejS0sy0EcQx6crYAW0IZ8RK1NrGJZafiuN0mDX5CnWDOJQxTAd3fLWNeyi6-bD9PKThZi1EtusmOCQGsG5g6Df3ERGuymqEaetPku4MMaBz9J39C-nNK86B91Lg79iRTjIRP0YPqZP38", height: "h-96", alt: "Grand entrance floral archway" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2n2wruZcHzrvdMJv8L3whYzq9yk_-iyw6-pnsUn4oezgm8G7nHAorCqhWgedB68uKdMr95GmjuGi5_C07ZYT8w6PIcMrKlHG6xu9WbjSauhMvr7vU4l_iScLw_q1cbnajNQEpVtxoAWYAcJuw4k_Prd7leOfn4NYhhmTnfusx0i4_rsn0TdC8Sysaf7VNvoDBbhsLy3mgft0iotVyWJIvs7rQECfeO4_UUZcSBtfU0TBS94JLUjt6TwCh5boQsilqAS6NqRN-JEs", height: "h-64", alt: "Luxury wedding dinner table setup" }
  ],
  [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOu7dwUCfpfOWhuOuiX_CX3neLJz7z6S0Ru4CsdW9wWb1EJeClNBRn5sRvurQrlJopX816Gu3NfBby3lcYfj98IgP5tuxYt62YdzY4vjeDGxIyzh9QiQoVZXG2hLEEXZOzM1iYiDk-VC4lKDFvlbvgp0yJns3p4r5tNytdUgGJbRfNSWQMaPxkLOgPbuh0QMt8sD-JdTABt0RhjoKdnvu-6bYbRjMCv8ZQvVGrDizOciOyxoVfveBb7iax0ASHH-r7b8MgM_n1wKQ", height: "h-64", alt: "Vibrant neon party decor and lighting" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZWw64u1skGHXGdMHRjh07bIf4TrwTqNXN8AWXA7U9QUk4tx4_AvLd_2cipMMsUfbjuNOj1lrLoNfUl-GSr7KbsEl0QjL0tMzrqI9WSFqPFkUgad0qhVVgIqc0BIyFCgSlrWKCsvTKQOJJ2sGpIS-Kqdr8Iuo65wlCqsAowNZiHYqSd0QdSC2P7-7k_ygPkF5le761HTzTsix-a3O-LTeScsg6iHa83KxO2n-4qEDE_FdD_ZFOdmku4TYKF257jcIeLJvfLgmdl6c", height: "h-96", alt: "Elegant indoor stage decoration" }
  ],
  [
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJfqtKKPUGlcWLgZwediO8TuseF-tNkgjZSE2dQOmthPJdkq2dl12wiVT_QI-LqSj6MCz-hwE8rqVyEuR7VmS2U_E4s6-RpemhBIYHj9v05XaYm8IlCV67AV8b-Z-ko2XkRJ4IHgx2pu3GdQG6kmLvyO6qfT_qaDUJrMdhVw3kOOkmnPn1EcS2Wcw1WsJFvkrxgfOpvjGhfcooTFGjQeoiKWLlgKKkGlddC0EMaDYNxTHjuBRNN5eMf4i58AuA2y0H1tLedBRqWZY", height: "h-96", alt: "Outdoor garden party event styling" },
    { src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6157_Rwv8PZi-nrteex2bCL_vys7uEuP2e1HITcguSvWX1Hjutqj9jYRF90nrJ1qgSsoHP8J_3YDuJ9jNDG92B3ierA25onF-2XvdJkjKGMzf9zP_fvqPD_MdsZre_hfH7NKXyujRjxUrXDwkuEUx0go_LGW28BzZapwR_ybXFKYG3ZGOCSk8rH_7PN5LIHW6pMPf27MUa0dDn-tyTPjcepORi-FrtFAC154EK4IJk7J396i8L3jTpiMnNcKmlocNawCuC_n9kyg", height: "h-64", alt: "Intimate wedding table details" }
  ]
];

const Portfolio = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-6 md:px-20 overflow-hidden" id="portfolio">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="flex flex-col items-center text-center mb-16 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Visual Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold dark:text-white">Glimpse of Perfection</h3>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioImages.map((column, colIndex) => (
            <div key={colIndex} className={`space-y-4 ${colIndex % 2 !== 0 ? 'md:pt-12' : ''}`}>
              {column.map((image, imgIndex) => (
                <motion.div 
                  key={imgIndex} 
                  variants={imageVariants}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className={`rounded-2xl w-full ${image.height} object-cover shadow-lg hover:shadow-primary/20 transition-all`}
                    alt={image.alt}
                    src={image.src}
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
