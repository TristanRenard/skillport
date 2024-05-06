import Link from "next/link"

export const Liens = ({ mail, telephone, github, linkedin, instagram, twitter, dribbble, behance, codepen }) => (
  <div id="Contact" className="py-10 mt-28 mx-4 flex font-bold text-xl align-middle justify-center border-t border-primary">
    <p>
      {(mail && <Link className="hover:text-primary transition-all" href={`mailto:${mail}`}>{mail}</Link>)}
      {(telephone && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={`tel:${telephone}`}>Téléphone</Link></>)}
      {(github && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={github}>Github</Link></>)}
      {(linkedin && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={linkedin}>Linkedin</Link></>)}
      {(instagram && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={instagram}>Instagram</Link></>)}
      {(twitter && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={twitter}>Twitter</Link></>)}
      {(dribbble && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={dribbble}>Dribbble</Link></>)}
      {(behance && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={behance}>Behance</Link></>)}
      {(codepen && <><span className="mx-4">|</span><Link className="hover:text-primary transition-all" href={codepen}>Codepen</Link></>)}
    </p>
  </div>
)
