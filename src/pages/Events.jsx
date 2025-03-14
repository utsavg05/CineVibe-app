import EventCard from "../components/EventCard";

// const events = [
//     {
//         id: 1,
//         title: "Music Concert",
//         date: "April 12, 2025",
//         location: "Los Angeles, CA"
//     },
//     {
//         id: 2,
//         title: "Stand-up Comedy Night",
//         date: "May 8, 2025",
//         location: "New York, NY"
//     }
// ];

function Events() {
    return (
        <div className="p-10 bg-gray-100">
            <h1 className="text-2xl font-bold">Upcoming Events</h1>
            <div className="flex flex-col mt-2">
                <EventCard name="Made In India - OG Holi Fest!" schedule="Fri 14 Mar 2025 - Sat 15 Mar 2025" img="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1741323787336_miibms1240x3006mar.jpg" />
                <EventCard name="FINK India 2025" schedule="Thu 03 Apr onwards" img="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1740487029833_finkindiaweb.jpeg" />
                <EventCard name="Red Lorry Film Festival 2025 - Take Two, Mumbai" schedule="Fri 21 Mar 2025 - Sun 23 Mar 2025" img="https://assets-in-gm.bmscdn.com/promotions/cms/creatives/1740650947822_deewaarweb.jpg" />
                <EventCard name="Ravi Gupta Live" schedule="Sun 23 Mar 2025" img="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-kal-ki-chinta-nahi-karta-ft-ravi-gupta-0-2024-7-6-t-8-2-22.jpg" />
                <EventCard name="Gaurav Kapoor Live" schedule="Fri 21 Mar 2025" img="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-gaurav-kapoor-live-0-2025-3-12-t-13-37-5.jpg" />
            </div>
        </div>
    );
}

export default Events;
