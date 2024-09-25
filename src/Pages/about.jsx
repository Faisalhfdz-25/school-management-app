/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const links = [
  { name: 'Open roles', href: '#' },
  { name: 'Internship program', href: '#' },
  { name: 'Our values', href: '#' },
  { name: 'Meet our leadership', href: '#' },
];

const stats = [
  { name: 'Offices worldwide', value: 12 },
  { name: 'Full-time colleagues', value: 300 },
  { name: 'Hours per week', value: 40 },
  { name: 'Paid time off', value: 'Unlimited' },
];

const About = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-40 sm:py-32 border rounded-xl mt-12">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        {/* ... */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
            fugiat veniam occaecat fugiat aliqua.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <StatsDisplay stats={stats} />
        </div>
      </div>
    </div>
  );
};

const StatsDisplay = ({ stats }) => {
  return (
    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Stat key={stat.name} name={stat.name} finalValue={stat.value} />
      ))}
    </dl>
  );
};

const Stat = ({ name, finalValue }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const duration = 2000; // Durasi dalam milidetik
    const incrementTime = 50; // Waktu antara setiap increment dalam milidetik
    const totalSteps = Math.ceil(duration / incrementTime);
    const incrementValue = Math.ceil(finalValue / totalSteps);

    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev + incrementValue >= finalValue) {
          clearInterval(interval);
          return finalValue; // Set ke nilai akhir
        }
        return prev + incrementValue;
      });
    }, incrementTime);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [finalValue]);

  return (
    <div className="flex flex-col-reverse">
      <dt className="text-base leading-7 text-gray-300">{name}</dt>
      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{typeof finalValue === 'number' ? value : finalValue}</dd>
    </div>
  );
};

export default About;
