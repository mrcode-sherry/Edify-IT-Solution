export default function FooterBar() {
  return (

    <div className="px-6 md:px-20 border-t-[3px] border-white border-opacity-30">
      <div className="flex justify-center py-6">
        {/* <p className="text-[#B2B2B2] hover:text-white duration-150 cursor-pointer text-sm md:text-[18px]">Use template</p>
            <p className="text-[#B2B2B2] text-sm md:text-[18px] hover:text-white duration-150 cursor-pointer">Visioned and Crafted by <span className="text-white text-sm md:text-[18px]">Kanishk Dubey</span></p>
            <p className="text-[#B2B2B2] text-sm md:text-[18px]">© All right reserved</p> */}
        <p className="text-[#B2B2B2] text-sm md:text-[18px]">
          © {new Date().getFullYear()} All right reserved
        </p>
      </div>
    </div>
  );
}
