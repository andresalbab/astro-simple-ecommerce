import { Typography, Button } from "@material-tailwind/react";

export function ContentSectionOne() {
  return (
    <section className="py-16 px-8 lg:py-28">
      <div className="container mx-auto grid items-center lg:grid-cols-2">
        <div className="row-start-2 mt-12 lg:row-auto lg:mt-0 lg:pr-12">
          <Typography color="blue" className="mb-2 !font-semibold">
            Our Vision
          </Typography>
          <Typography variant="h2" color="blue-gray" className="mb-6">
            Find some great partners
          </Typography>
          <Typography variant="lead" color="gray" className="mb-12">
            I always felt like I could do anything. That&apos;s the main thing
            people are controlled by! They&apos;re slowed down by{" "}
            <a
              href="#"
              className="underline underline-offset-4 transition-colors hover:text-blue-500"
            >
              their perception of themselves
            </a>
            . If you&apos;re taught you can&apos;t do anything, you won&apos;t
            do anything. I was taught I could do everything.
            <br />
            <br />
            The time is now for it to be okay to be great. For being a bright
            color. For standing out. But the time is now to be okay to{" "}
            <a
              href="#"
              className="underline underline-offset-4 transition-colors hover:text-blue-500"
            >
              be the greatest you
            </a>
            . Would you believe in what you believe in, if you were the only one
            who believed it?
            <br />
            <br />
            We&apos;re not always in the position that we want to be at.
            We&apos;re constantly growing. We&apos;re constantly making
            mistakes. We&apos;re constantly trying to express ourselves and
            actualize our dreams.
          </Typography>
          <div className="inline-flex flex-wrap gap-3">
            <Button variant="outlined" color="blue-gray" size="lg">
              get in touch
            </Button>
            <Button size="lg">our process</Button>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=80"
          alt="team work"
          className=" h-full min-h-[50vh] w-full rounded-xl object-cover object-center md:min-h-[75vh]"
        />
      </div>
    </section>
  );
}

export default ContentSectionOne;
