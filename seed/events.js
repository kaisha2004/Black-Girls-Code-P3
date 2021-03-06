const db = require("../db/connection")
const Event = require("../models/event")

db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const events = [
    {
      imgURL: "build-a-webpage.png",
      title: "Build-A-Webpage Day",
      funds: 40,
      content:
        "Swag bushwick activated charcoal meditation poke tofu. Hoodie aesthetic pitchfork crucifix retro banjo neutra XOXO cliche. Viral +1 mixtape, echo park banjo humblebrag portland fingerstache. Hexagon williamsburg mlkshk plaid, enamel pin twee listicle air plant.",
      quote: "My favorite part was making Unicorns in Javascript!",
      author: "Leah",
      age: 11,
    },
    {
      imgURL: "lovels-respect-hackathon.png",
      title: "LovelsRespect Hackathon",
      funds: 10,
      content:
        "Chicharrones gentrify semiotics street art pork belly 90's. Squid kitsch sustainable, polaroid tofu bicycle rights chartreuse. Copper mug letterpress tote bag hell of man braid etsy dreamcatcher selvage raw denim. Wayfarers air plant narwhal mlkshk pork belly seitan squid farm-to-table put a bird on it franzen food truck +1 banjo knausgaard.",
      quote: "Wow, love really is respect!",
      author: "Paige",
      age: 14,
    },
    {
      imgURL: "techinnovation-bus-ride.png",
      title: "Tech Innovation Bus Ride",
      funds: 20,
      content:
        "Green juice irony chia, paleo tumblr franzen subway tile typewriter poutine waistcoat yr vape. Lumbersexual chillwave polaroid hexagon fixie banh mi dreamcatcher. Messenger bag listicle pug, narwhal church-key retro cardigan. Gastropub tacos whatever, plaid occupy kitsch squid hella typewriter banh mi.",
      quote: "I got to meet so many cool programmers on the bus!",
      author: "Cathy",
      age: 13,
    },
    {
      imgURL: "break-the-cycle.png",
      title: "Break the Cycle",
      funds: 30,
      content:
        "Swag bushwick activated charcoal meditation poke tofu. Hoodie aesthetic pitchfork crucifix retro banjo neutra XOXO cliche. Viral +1 mixtape, echo park banjo humblebrag portland fingerstache. Hexagon williamsburg mlkshk plaid, enamel pin twee listicle air plant.",
      quote: "My favorite part was making Unicorns in Javascript!",
      author: "Susan",
      age: 9,
    },
  ]

  await Event.insertMany(events)
  console.log("Created events!")
}

const run = async () => {
  await main()
  db.close()
}

run()
