import Logo from "@/assets/image/Sormax_Logo.png"


function Loading() {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-b-red-500 border-t-blue-300"></div>
        <img
          src={Logo.src}
          className="rounded-full h-20 w-20 "
        />
      </div>
    </div>
  );
}

export default Loading;
