import Image from 'next/image'

export default function Whatsapp({ }) {
  return (
    <>
      <div className="fixed bottom-0 right-0 p-3 animate-bounce" style={{zIndex: 6, right: 'initial'}}>
        <a href="https://wa.me/+919600919891?text=Hello How can I help you?" target="_blank" rel="noopener noreferrer">
          <Image src="/whatsapp.png" width={60} height={60} alt="aaaa"/>
        </a>
      </div>
    </>
  )
}