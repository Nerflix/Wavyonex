const PHONE = '254790155393'

export const wa = (message) =>
  `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`

export const WA = {
  general: wa("Hello Wavonex, I'd like to get a free quote for your engineering services. Please get back to me."),
  hvac: wa("Hello Wavonex, I'm interested in your HVAC Systems services (air conditioning, ventilation, ducting). Could you provide a quote and more details?"),
  refrigeration: wa("Hello Wavonex, I'm interested in your Refrigeration Solutions (cold rooms, commercial refrigeration, industrial cooling). Could you provide a quote?"),
  solar: wa("Hello Wavonex, I'm interested in your Solar Energy installation services. Could you provide a site assessment and quote?"),
  products: wa("Hello Wavonex, I'd like to enquire about product availability and pricing. Please assist me."),
  engineer: wa("Hello Wavonex, I'd like to speak to one of your engineers about my requirements. Please get back to me."),
  emergency: wa("Hello Wavonex, I have an urgent system issue and need emergency support. Please respond ASAP."),
  quote: wa("Hello Wavonex, I'd like a free assessment and quote. Our team should respond within 2 hours — please contact me."),
}
