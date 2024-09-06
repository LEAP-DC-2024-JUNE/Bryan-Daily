import CopyrightIcon from "@/icons/CopyrightIcon";

const Footer = () => {
  return (
    <div className="bg-gray-50 px-20 py-6">
      <div className="w-full px-8 flex justify-center items-center gap-2">
        <CopyrightIcon />
        <p className="text-gray-600">2024 | Greetings with ❤️️ from Ulaanbaatar</p>
      </div>
    </div>
  );
}

export default Footer;