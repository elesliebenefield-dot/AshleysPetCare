export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get in Touch", href: "#contact" },
};

export const hero = {
  headline: "Your Pet, Cared For Like Family",
  tagline: "From Leash to Love",
  body: "Personalized pet care in Lake Nona and Greater Orlando — from daily dog walks to in-home sitting and special needs support. Every pet gets the time, attention, and love they deserve.",
  cta: { label: "Inquire Now", href: "#contact" },
  image: { src: "/images/ashley-with-corgi.jpg", alt: "Ashley holding a Corgi outdoors, smiling" },
};

export const about = {
  heading: "Hi, I'm Ashley",
  subheading: "Nearly 30 years in Central Florida. A lifetime of loving animals.",
  paragraphs: [
    "I'm a wife, a mom, a dog mom, and a lifelong animal lover who has called Central Florida home for almost three decades. I know this community because I'm part of it — I volunteer with Scouts of America and genuinely care about the neighbors I serve.",
    "Over the years I've built real experience with pets of all kinds and needs: senior dogs and cats, rescue animals still finding their footing, pets recovering from injuries or surgery, animals with mobility challenges, and the notoriously picky eaters who need a little extra patience (and sometimes hand feeding) before they'll touch their bowl.",
    "I care for dogs, cats, puppies, and kittens — and whether your pet is perfectly healthy or needs specialized attention, they'll be treated like a member of my own family.",
    "I'm also a registered Rover provider, so you can find additional reviews and background information there. But this site is where you can reach me directly — no middleman, just a real conversation about what your pet needs.",
  ],
  image: {
    primary: { src: "/images/ashley-headshot.jpg", alt: "Ashley, owner of Ashley's Pet Care" },
    secondary: { src: "/images/ashley-with-dog-bw.jpg", alt: "Ashley resting alongside a dog, black and white photo" },
  },
};

export const services = [
  {
    id: "dog-walking",
    title: "Dog Walking",
    description:
      "Regular walks keep your dog healthy, happy, and mentally stimulated. I provide consistent, reliable walks tailored to your dog's pace, energy level, and route preferences.",
    image: { src: "/images/two-dogs-walking.jpg", alt: "Two dogs on leashes being walked side by side" },
  },
  {
    id: "pet-sitting",
    title: "Pet Sitting",
    description:
      "In-home pet sitting means your pet stays in the comfort of their own space while you're away. No kennels, no strangers — just familiar surroundings and someone who genuinely cares.",
    image: { src: "/images/dog-by-fence.jpg", alt: "Black and brown dog resting by a wooden fence" },
  },
  {
    id: "drop-in-visits",
    title: "Drop-In Visits",
    description:
      "Need someone to check in, refresh food and water, and give your pet some love mid-day? Drop-in visits are flexible, scheduled stops that keep your pet comfortable and on their routine.",
    image: { src: "/images/dogs-playing-yard.jpg", alt: "Two dogs playing in a fenced yard" },
  },
  {
    id: "medication",
    title: "Medication Administration",
    description:
      "Managing a pet's medications can be stressful to hand off. I'm experienced with oral medications, topical treatments, and the patience it takes to make the process calm and consistent for your animal.",
    image: { src: "/images/boy-with-dog-bw.jpg", alt: "A child bonding with a dog outdoors" },
  },
  {
    id: "special-needs",
    title: "Personalized & Special Needs Care",
    description:
      "Senior pets, rescue dogs, post-surgery recovery, mobility challenges, anxiety — every situation is different and every pet deserves care that reflects that. I take the time to understand your pet's needs and build real trust before jumping in.",
    image: { src: "/images/puppy-in-pool.jpg", alt: "Happy puppy playing in a backyard kiddie pool" },
  },
];

export const trust = {
  statement:
    "Every pet in my care is treated as an individual — not an appointment. I take the time to learn your pet's personality, preferences, quirks, and needs so that care feels familiar and safe, not just covered.",
  rover: "You can also find me on Rover, where I'm a registered provider with verified reviews.",
  image: { src: "/images/ashley-with-dog-selfie.jpg", alt: "Ashley smiling with a dog cheek to cheek" },
};

export const inquiry = {
  heading: "Let's Talk About Your Pet",
  subheading:
    "Fill out the form below and Ashley will reach out personally to discuss availability, your pet's needs, and next steps.",
  services: [
    "Dog Walking",
    "Pet Sitting",
    "Drop-In Visit",
    "Medication Administration",
    "Special Needs Care",
    "Other / Not Sure Yet",
  ],
  fields: {
    name: { label: "Your Name", placeholder: "Jane Smith" },
    email: { label: "Email Address", placeholder: "jane@example.com" },
    phone: { label: "Phone Number", placeholder: "(555) 000-0000" },
    petName: { label: "Pet's Name", placeholder: "Buddy" },
    petType: { label: "Type of Pet", placeholder: "Dog, cat, puppy, kitten…" },
    service: { label: "Service Needed", placeholder: "Select a service" },
    message: { label: "Tell Me About Your Pet", placeholder: "Share anything helpful — age, breed, routine, special needs, or questions you have." },
  },
  submit: "Send My Inquiry",
  success: "Thank you! Ashley will be in touch soon.",
  error: "Something went wrong. Please try again or email Ashley directly.",
};

export const footer = {
  tagline: "From Leash to Love",
  serviceArea: "Serving Lake Nona & Greater Orlando",
  copyright: `© ${new Date().getFullYear()} Ashley's Pet Care. All rights reserved.`,
};
