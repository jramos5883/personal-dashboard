export default function GoogleCalendarApi() {
  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center">
      <h1 className="p-4">I am a google calendar! :D</h1>
      <iframe
        className=""
        src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%239d9b9b&ctz=America%2FLos_Angeles&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=1&showTz=1&src=anJwcm9kZXZAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
        style={{ border: "solid 2px #777" }}
        width="900"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
}
