import { JSX } from "react"

const GoogleMapLocation = (): JSX.Element => {
  return (
    <section
      id="google-map-wrapper"
      aria-label="Location on Google Maps"
      className="w-full py-4 flex justify-center"
    >
      <div className="w-full max-w-6xl aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map showing location in..."
          src="https://www.google.com/maps/place/Ahmedabad,+Gujarat/@23.0197788,71.9887107,10z/data=!3m1!4b1!4m6!3m5!1s0x395e848aba5bd449:0x4fcedd11614f6516!8m2!3d23.022505!4d72.5713621!16zL20vMDFkODhj?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
          className="w-full h-full"
          style={{border: "0"}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

export default GoogleMapLocation
