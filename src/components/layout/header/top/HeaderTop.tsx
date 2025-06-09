import TextSlider from "@/components/ui/sliders/TextSlider";
import { getNewsInfoData } from "@/services/get-news";

const HeaderTop = async () => {
  const news = await getNewsInfoData();
  // const social_networks = await getSocialNetworks();
  // const contacts = await getContact();

  return (
    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-x-3 ">
        <TextSlider items={news} interval={7000} />

        {/*
        <SocialNetwoksTop
          className="hidden md:inline-flex"
          items={social_networks}
        />
        <ContactsTop items={contacts} /> */}
      </div>
    </div>
  );
};

export default HeaderTop;
