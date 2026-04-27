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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.9205521201!2d71.98871068715664!3d23.019778756893437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1777287136183!5m2!1sen!2sin"
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
