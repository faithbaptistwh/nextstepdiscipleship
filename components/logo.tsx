import Image from 'next/image'

export const MainLogo = () => (
    <Image
      width={200}
      height={60}  
      src="/logo.png"
      alt="Default Image"
      objectFit="fill"
    />
  );