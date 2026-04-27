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
          src="https://maps.app.goo.gl/SrhM4E1MQGUroUxT9"
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
