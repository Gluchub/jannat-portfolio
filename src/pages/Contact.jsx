import React ,{useState, useRef}from 'react'
import "../styles/index.css"
import emailjs from "@emailjs/browser"
const Contact = () => {
  
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_0k2esei',
      'template_6ia4d99',
      {
        name:form.name,
        from_name:'jannat',
        email:form.email,
        to_email:'jannatbutt262626@gmail.com',
        message:form.message,
      },
      'hVZmv0BZLceNsKan9')
      .then(()=>{
        setLoading(false);
        alert('Thank you!! i will get back to you as soon as possible')
        setForm({
          name:'',
          email:'',
          message:'',
        })
      }
    )
  }
  return (
    <section className='Contact_container' id='contact'>
      <div className='Contacts_container' >
        <div className='Contact_showcase_container'>
          <h1>Contacts</h1>
          <p>For further inquiries or <span>collaborations</span>, feel free 
          to reach out via the contact information provided.</p>
          <a href="" onClick= {(e)=>{
              e.preventDefault()
              setActive("");
              setToggle(!toggle);
              const element = document.getElementById("contacts_form");
              if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
              };
            }}>
          <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3L16 17L29 3" stroke="#4BF9A0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          </a>

        </div>
        <div className='links_section' id='links_section_three'>
          <p className="link_text">Follow Me</p>

          <a href=""><div>
            <svg width="3" height="52" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0.25" y1="0.5" x2="0.249999" y2="21.5" stroke="white" stroke-width="0.5"/>
            </svg>
          </div></a>

          <a href=""><div>
            <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.44015 0.5H0.598124C0.278906 0.5 0 0.729687 0 1.04516V6.90016C0 7.21734 0.278906 7.5 0.598124 7.5H6.43843C6.75936 7.5 6.99999 7.21547 6.99999 6.90016V1.04516C7.00186 0.729687 6.75936 0.5 6.44015 0.5ZM2.16984 6.33484H1.16703V3.21688H2.16984V6.33484ZM1.70312 2.74281H1.69593C1.375 2.74281 1.16719 2.50391 1.16719 2.20484C1.16719 1.90031 1.38047 1.66703 1.70859 1.66703C2.03672 1.66703 2.2375 1.89859 2.24468 2.20484C2.24453 2.50391 2.03672 2.74281 1.70312 2.74281ZM5.83483 6.33484H4.83202V4.63C4.83202 4.22156 4.68609 3.9425 4.32327 3.9425C4.04609 3.9425 3.88203 4.13 3.80906 4.31266C3.78171 4.37828 3.77437 4.46766 3.77437 4.55891V6.33484H2.77156V3.21688H3.77437V3.65078C3.92031 3.44297 4.14827 3.14391 4.67874 3.14391C5.33702 3.14391 5.83499 3.57781 5.83499 4.51328L5.83483 6.33484Z" fill="#CECECE"/>
            </svg> 
          </div></a>

          <a href=""><div>
            <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.02114C7 2.07665 5.43281 0.5 3.5 0.5C1.56719 0.5 0 2.07665 0 4.02114C0 5.77857 1.27969 7.23528 2.95312 7.49968V5.03929H2.06422V4.02114H2.95312V3.24539C2.95312 2.36306 3.47578 1.87529 4.27516 1.87529C4.65812 1.87529 5.05875 1.94414 5.05875 1.94414V2.81075H4.61719C4.18266 2.81075 4.04672 3.08207 4.04672 3.36093V4.02114H5.01734L4.86234 5.03929H4.04687V7.5C5.72031 7.23576 7 5.77904 7 4.02114Z" fill="#CECECE"/>
            </svg>
          </div></a>

          <a href=""><div>
            <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.47154 4.92341C1.47142 5.0689 1.42816 5.2111 1.34724 5.33201C1.26632 5.45293 1.15136 5.54714 1.01691 5.60273C0.882451 5.65832 0.734532 5.6728 0.591847 5.64434C0.449163 5.61588 0.318119 5.54576 0.215282 5.44283C0.112445 5.33991 0.0424316 5.2088 0.0140923 5.0661C-0.014247 4.92339 0.000360252 4.77548 0.0560674 4.64107C0.111775 4.50666 0.206081 4.39179 0.327064 4.31097C0.448048 4.23015 0.590277 4.18701 0.735772 4.18701H1.47154V4.92341Z" fill="#CECECE"/>
              <path d="M1.84119 4.92284C1.84119 4.72781 1.91866 4.54078 2.05656 4.40287C2.19446 4.26497 2.3815 4.1875 2.57652 4.1875C2.77155 4.1875 2.95858 4.26497 3.09648 4.40287C3.23439 4.54078 3.31186 4.72781 3.31186 4.92284V6.76414C3.31186 6.95917 3.23439 7.1462 3.09648 7.2841C2.95858 7.42201 2.77155 7.49948 2.57652 7.49948C2.3815 7.49948 2.19446 7.42201 2.05656 7.2841C1.91866 7.1462 1.84119 6.95917 1.84119 6.76414V4.92284Z" fill="#CECECE"/>
              <path d="M2.57707 1.97154C2.43157 1.97142 2.28938 1.92816 2.16846 1.84724C2.04755 1.76632 1.95334 1.65136 1.89775 1.51691C1.84215 1.38245 1.82767 1.23453 1.85613 1.09185C1.88459 0.949163 1.95472 0.818119 2.05764 0.715282C2.16057 0.612445 2.29167 0.542432 2.43438 0.514092C2.57709 0.485753 2.725 0.50036 2.8594 0.556067C2.99381 0.611775 3.10869 0.706081 3.18951 0.827064C3.27033 0.948048 3.31346 1.09028 3.31346 1.23577V1.97154H2.57707Z" fill="#CECECE"/>
              <path d="M2.57664 2.3407C2.77167 2.3407 2.9587 2.41817 3.09661 2.55607C3.23451 2.69398 3.31198 2.88101 3.31198 3.07603C3.31198 3.27106 3.23451 3.45809 3.09661 3.596C2.9587 3.7339 2.77167 3.81137 2.57664 3.81137H0.735336C0.540313 3.81137 0.353277 3.7339 0.215375 3.596C0.0774727 3.45809 0 3.27106 0 3.07603C0 2.88101 0.0774727 2.69398 0.215375 2.55607C0.353277 2.41817 0.540313 2.3407 0.735336 2.3407H2.57664Z" fill="#CECECE"/>
              <path d="M5.52893 3.07646C5.52905 2.93096 5.57231 2.78877 5.65323 2.66785C5.73416 2.54694 5.84911 2.45273 5.98357 2.39714C6.11802 2.34154 6.26594 2.32706 6.40863 2.35552C6.55131 2.38398 6.68236 2.45411 6.78519 2.55703C6.88803 2.65996 6.95804 2.79106 6.98638 2.93377C7.01472 3.07648 7.00011 3.22438 6.94441 3.35879C6.8887 3.4932 6.79439 3.60808 6.67341 3.6889C6.55243 3.76972 6.4102 3.81285 6.2647 3.81285H5.52893V3.07646Z" fill="#CECECE"/>
              <path d="M5.15866 3.07664C5.15866 3.27167 5.08119 3.4587 4.94328 3.5966C4.80538 3.73451 4.61835 3.81198 4.42332 3.81198C4.2283 3.81198 4.04127 3.73451 3.90336 3.5966C3.76546 3.4587 3.68799 3.27167 3.68799 3.07664V1.23534C3.68799 1.04031 3.76546 0.853277 3.90336 0.715375C4.04127 0.577473 4.2283 0.5 4.42332 0.5C4.61835 0.5 4.80538 0.577473 4.94328 0.715375C5.08119 0.853277 5.15866 1.04031 5.15866 1.23534V3.07664Z" fill="#CECECE"/>
              <path d="M4.42365 6.02844C4.56915 6.02857 4.71134 6.07182 4.83226 6.15275C4.95317 6.23367 5.04738 6.34862 5.10297 6.48308C5.15857 6.61753 5.17305 6.76545 5.14459 6.90814C5.11613 7.05082 5.046 7.18187 4.94308 7.2847C4.84015 7.38754 4.70905 7.45755 4.56634 7.48589C4.42363 7.51423 4.27572 7.49963 4.14132 7.44392C4.00691 7.38821 3.89203 7.2939 3.81121 7.17292C3.73039 7.05194 3.68726 6.90971 3.68726 6.76421V6.02844H4.42365Z" fill="#CECECE"/>
              <path d="M4.42332 5.65817C4.2283 5.65817 4.04127 5.5807 3.90336 5.4428C3.76546 5.30489 3.68799 5.11786 3.68799 4.92284C3.68799 4.72781 3.76546 4.54078 3.90336 4.40287C4.04127 4.26497 4.2283 4.1875 4.42332 4.1875H6.26463C6.45966 4.1875 6.64669 4.26497 6.78459 4.40287C6.9225 4.54078 6.99997 4.72781 6.99997 4.92284C6.99997 5.11786 6.9225 5.30489 6.78459 5.4428C6.64669 5.5807 6.45966 5.65817 6.26463 5.65817H4.42332Z" fill="#CECECE"/>
            </svg>
          </div></a>

          <a href=""><div>
            <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.79934 4.74375C6.85082 4.51214 6.8765 4.27555 6.8759 4.03829C6.8759 2.22079 5.38076 0.746102 3.53546 0.746102C3.34428 0.745964 3.15342 0.761642 2.96484 0.792977C2.65644 0.600451 2.29996 0.4989 1.9364 0.500009C0.867974 0.500009 1.04267e-05 1.35501 1.04267e-05 2.4086C-0.00112641 2.74892 0.0907203 3.08308 0.265634 3.375C0.220901 3.59274 0.198286 3.81444 0.198134 4.03672C0.198134 5.85609 1.69328 7.3289 3.53671 7.3289C3.74154 7.32942 3.946 7.31112 4.14748 7.27422C4.42991 7.42294 4.74438 7.50045 5.06357 7.5C6.13388 7.5 6.99997 6.645 6.99997 5.59141C7.00175 5.29689 6.93296 5.00622 6.79934 4.74375ZM5.24998 5.60938C5.09498 5.82438 4.86701 5.99578 4.5717 6.11609C4.27639 6.23641 3.92749 6.29688 3.52639 6.29688C3.04687 6.29688 2.64578 6.21297 2.33031 6.04891C2.11162 5.93382 1.92301 5.76897 1.77969 5.56766C1.63734 5.36719 1.56625 5.16672 1.56625 4.97391C1.56625 4.8536 1.61313 4.74969 1.70484 4.66219C1.79609 4.57828 1.91453 4.53453 2.05312 4.53453C2.16797 4.53453 2.2664 4.56735 2.34671 4.63485C2.42328 4.6986 2.4889 4.79344 2.54171 4.91735C2.5929 5.03602 2.65754 5.14842 2.73437 5.25235C2.8002 5.33797 2.89322 5.40906 3.01343 5.46563C3.13562 5.52219 3.2978 5.55125 3.4978 5.55125C3.77311 5.55125 3.9992 5.49297 4.16873 5.37813C4.33655 5.26688 4.41686 5.13203 4.41686 4.96797C4.41686 4.8386 4.37483 4.73641 4.28733 4.65625C4.19623 4.57235 4.07764 4.50672 3.92999 4.46297C3.77858 4.4161 3.57264 4.36641 3.31733 4.3136C2.97093 4.24063 2.67671 4.15313 2.44234 4.05469C2.20359 3.95438 2.01031 3.81407 1.86797 3.64094C1.72391 3.46407 1.65281 3.24172 1.65281 2.98094C1.65037 2.73992 1.73011 2.50526 1.8789 2.31563C2.02843 2.12423 2.24547 1.97469 2.52812 1.87266C2.80531 1.77063 3.1353 1.71954 3.50718 1.71954C3.80624 1.71954 4.06702 1.75423 4.28576 1.81985C4.50451 1.88548 4.69061 1.97844 4.83826 2.09141C4.98592 2.20438 5.09357 2.32469 5.16279 2.45079C5.23201 2.57688 5.26685 2.70422 5.26685 2.82579C5.26685 2.94235 5.22123 3.05 5.12998 3.14297C5.08572 3.18902 5.03243 3.22543 4.97343 3.2499C4.91444 3.27436 4.85102 3.28637 4.78717 3.28516C4.66326 3.28516 4.56654 3.25594 4.4992 3.19766C4.4367 3.14297 4.37155 3.05907 4.30045 2.93688C4.21655 2.78204 4.11623 2.65797 4.00139 2.57047C3.88827 2.48672 3.70233 2.44297 3.44343 2.44297C3.20452 2.44297 3.00952 2.48985 2.8653 2.5836C2.72671 2.67297 2.65921 2.77688 2.65921 2.89891C2.65749 2.96883 2.68151 3.03695 2.72671 3.09032C2.7817 3.15359 2.84943 3.20454 2.92546 3.23985C3.01108 3.28289 3.10087 3.31707 3.19343 3.34188C3.28718 3.3675 3.4414 3.40579 3.65483 3.45313C3.92639 3.50969 4.17436 3.57532 4.39326 3.64266C4.61576 3.71375 4.80717 3.79891 4.96389 3.89969C5.11953 3.99796 5.24906 4.13247 5.34138 4.29172C5.43076 4.44797 5.47638 4.64532 5.47638 4.87141C5.48631 5.13589 5.40652 5.39596 5.24998 5.60938Z" fill="#CECECE"/>
            </svg>
          </div>  </a>    
        </div>
      </div>
      <div className="Contact_info">
        <h1>Contact Info</h1>
        <div>
          <div>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.2308 23.9998C18.1849 23.9998 16.7157 23.6216 14.5156 22.3926C11.8402 20.8926 9.77084 19.5078 7.10994 16.8543C4.54442 14.2909 3.29595 12.6313 1.54863 9.4523C-0.425348 5.86297 -0.0888504 3.98152 0.287298 3.1774C0.735247 2.21632 1.39645 1.64149 2.25109 1.07094C2.73652 0.75296 3.25023 0.480375 3.78569 0.256649C3.83927 0.233613 3.88911 0.211648 3.93358 0.191827C4.19881 0.072361 4.60068 -0.108177 5.10971 0.0846825C5.44942 0.212184 5.7527 0.47308 6.22744 0.941836C7.20103 1.90185 8.53148 4.03991 9.0223 5.08992C9.35183 5.79761 9.56991 6.26476 9.57045 6.78869C9.57045 7.40209 9.26181 7.87513 8.88727 8.38568C8.81708 8.48157 8.74742 8.57318 8.67991 8.66211C8.27214 9.19783 8.18266 9.35265 8.2416 9.62908C8.36109 10.1846 9.25217 11.8384 10.7166 13.2993C12.181 14.7602 13.7874 15.5949 14.3452 15.7138C14.6334 15.7754 14.7915 15.6822 15.3445 15.26C15.4238 15.1995 15.5052 15.1368 15.5904 15.0741C16.1616 14.6493 16.6128 14.3488 17.2118 14.3488H17.215C17.7364 14.3488 18.1827 14.5749 18.9222 14.9477C19.8867 15.4342 22.0894 16.7472 23.0555 17.7217C23.5254 18.1953 23.7875 18.4974 23.9155 18.8365C24.1084 19.3471 23.9268 19.7472 23.8084 20.0151C23.7885 20.0596 23.7666 20.1083 23.7435 20.1624C23.518 20.6968 23.2437 21.2094 22.9242 21.6935C22.3547 22.5453 21.7776 23.2048 20.8142 23.6532C20.3195 23.8871 19.778 24.0057 19.2308 23.9998Z" fill="#4BFFA5"/>
            </svg>
            <h1>Phone</h1> 
            <p>+92 328 5885657</p>
          </div>
          <div>
            <svg width="68" height="68" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.414 14.0007C18.1072 17.4785 15.6782 19.4561 12.9212 19.4561C10.1642 19.4561 8.3292 17.0134 8.59446 14.0007C8.85973 10.988 11.1257 8.54541 13.8827 8.54541C16.6397 8.54541 18.6786 11.0003 18.414 14.0007Z" stroke="#4BFFA5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.3946 25.0114C16.4474 25.8295 15.171 26 12.9892 26C6.36191 26 1.46646 20.6273 2.04669 14C2.62691 7.37273 8.47691 2 15.1042 2C22.5694 2 26.6733 6.89068 26.0965 13.4361C25.6662 18.3227 22.5435 19.7307 20.9085 19.4409C19.3703 19.1682 18.1008 17.7759 18.3353 15.1114L18.9135 8.54886" stroke="#4BFFA5" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1>Email</h1> 
            <p>jannatbutt262626@gmail.com</p>
          </div>
        </div>
      </div>  
      <div className="Contact_form" id='contacts_form'>
        <h1>Contact form</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <span>Name</span>
            <input
            type="text"
            name="name"
            placeholder="what is your name?"
            value={form.name}
            onChange={handleChange}
          />
          </div>
          
          <div>
            <span>Email</span>
            <input
            type="email"
            name="email"
            placeholder="what is your email?"
            value={form.email}
            onChange={handleChange}
          />
          </div>
          
          <div>
            <span>Message</span>
            <textarea
            rows={7}
            name="message"
            placeholder="What do you want to say?"
            value={form.message}
            onChange={handleChange}
          ></textarea>
          </div>
          
          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        <div className="Contact-short_info">
          <p>E: jannatbutt262626@gmail.com</p>
          <p>T: +92 328 5885657</p>
          <div className='links_section' id='links_section_four'>
            

            <a href=""><div>
              <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.44015 0.5H0.598124C0.278906 0.5 0 0.729687 0 1.04516V6.90016C0 7.21734 0.278906 7.5 0.598124 7.5H6.43843C6.75936 7.5 6.99999 7.21547 6.99999 6.90016V1.04516C7.00186 0.729687 6.75936 0.5 6.44015 0.5ZM2.16984 6.33484H1.16703V3.21688H2.16984V6.33484ZM1.70312 2.74281H1.69593C1.375 2.74281 1.16719 2.50391 1.16719 2.20484C1.16719 1.90031 1.38047 1.66703 1.70859 1.66703C2.03672 1.66703 2.2375 1.89859 2.24468 2.20484C2.24453 2.50391 2.03672 2.74281 1.70312 2.74281ZM5.83483 6.33484H4.83202V4.63C4.83202 4.22156 4.68609 3.9425 4.32327 3.9425C4.04609 3.9425 3.88203 4.13 3.80906 4.31266C3.78171 4.37828 3.77437 4.46766 3.77437 4.55891V6.33484H2.77156V3.21688H3.77437V3.65078C3.92031 3.44297 4.14827 3.14391 4.67874 3.14391C5.33702 3.14391 5.83499 3.57781 5.83499 4.51328L5.83483 6.33484Z" fill="#CECECE"/>
              </svg> 
            </div></a>

            <a href=""><div>
              <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.02114C7 2.07665 5.43281 0.5 3.5 0.5C1.56719 0.5 0 2.07665 0 4.02114C0 5.77857 1.27969 7.23528 2.95312 7.49968V5.03929H2.06422V4.02114H2.95312V3.24539C2.95312 2.36306 3.47578 1.87529 4.27516 1.87529C4.65812 1.87529 5.05875 1.94414 5.05875 1.94414V2.81075H4.61719C4.18266 2.81075 4.04672 3.08207 4.04672 3.36093V4.02114H5.01734L4.86234 5.03929H4.04687V7.5C5.72031 7.23576 7 5.77904 7 4.02114Z" fill="#CECECE"/>
              </svg>
            </div></a>

            <a href=""><div>
              <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.47154 4.92341C1.47142 5.0689 1.42816 5.2111 1.34724 5.33201C1.26632 5.45293 1.15136 5.54714 1.01691 5.60273C0.882451 5.65832 0.734532 5.6728 0.591847 5.64434C0.449163 5.61588 0.318119 5.54576 0.215282 5.44283C0.112445 5.33991 0.0424316 5.2088 0.0140923 5.0661C-0.014247 4.92339 0.000360252 4.77548 0.0560674 4.64107C0.111775 4.50666 0.206081 4.39179 0.327064 4.31097C0.448048 4.23015 0.590277 4.18701 0.735772 4.18701H1.47154V4.92341Z" fill="#CECECE"/>
                <path d="M1.84119 4.92284C1.84119 4.72781 1.91866 4.54078 2.05656 4.40287C2.19446 4.26497 2.3815 4.1875 2.57652 4.1875C2.77155 4.1875 2.95858 4.26497 3.09648 4.40287C3.23439 4.54078 3.31186 4.72781 3.31186 4.92284V6.76414C3.31186 6.95917 3.23439 7.1462 3.09648 7.2841C2.95858 7.42201 2.77155 7.49948 2.57652 7.49948C2.3815 7.49948 2.19446 7.42201 2.05656 7.2841C1.91866 7.1462 1.84119 6.95917 1.84119 6.76414V4.92284Z" fill="#CECECE"/>
                <path d="M2.57707 1.97154C2.43157 1.97142 2.28938 1.92816 2.16846 1.84724C2.04755 1.76632 1.95334 1.65136 1.89775 1.51691C1.84215 1.38245 1.82767 1.23453 1.85613 1.09185C1.88459 0.949163 1.95472 0.818119 2.05764 0.715282C2.16057 0.612445 2.29167 0.542432 2.43438 0.514092C2.57709 0.485753 2.725 0.50036 2.8594 0.556067C2.99381 0.611775 3.10869 0.706081 3.18951 0.827064C3.27033 0.948048 3.31346 1.09028 3.31346 1.23577V1.97154H2.57707Z" fill="#CECECE"/>
                <path d="M2.57664 2.3407C2.77167 2.3407 2.9587 2.41817 3.09661 2.55607C3.23451 2.69398 3.31198 2.88101 3.31198 3.07603C3.31198 3.27106 3.23451 3.45809 3.09661 3.596C2.9587 3.7339 2.77167 3.81137 2.57664 3.81137H0.735336C0.540313 3.81137 0.353277 3.7339 0.215375 3.596C0.0774727 3.45809 0 3.27106 0 3.07603C0 2.88101 0.0774727 2.69398 0.215375 2.55607C0.353277 2.41817 0.540313 2.3407 0.735336 2.3407H2.57664Z" fill="#CECECE"/>
                <path d="M5.52893 3.07646C5.52905 2.93096 5.57231 2.78877 5.65323 2.66785C5.73416 2.54694 5.84911 2.45273 5.98357 2.39714C6.11802 2.34154 6.26594 2.32706 6.40863 2.35552C6.55131 2.38398 6.68236 2.45411 6.78519 2.55703C6.88803 2.65996 6.95804 2.79106 6.98638 2.93377C7.01472 3.07648 7.00011 3.22438 6.94441 3.35879C6.8887 3.4932 6.79439 3.60808 6.67341 3.6889C6.55243 3.76972 6.4102 3.81285 6.2647 3.81285H5.52893V3.07646Z" fill="#CECECE"/>
                <path d="M5.15866 3.07664C5.15866 3.27167 5.08119 3.4587 4.94328 3.5966C4.80538 3.73451 4.61835 3.81198 4.42332 3.81198C4.2283 3.81198 4.04127 3.73451 3.90336 3.5966C3.76546 3.4587 3.68799 3.27167 3.68799 3.07664V1.23534C3.68799 1.04031 3.76546 0.853277 3.90336 0.715375C4.04127 0.577473 4.2283 0.5 4.42332 0.5C4.61835 0.5 4.80538 0.577473 4.94328 0.715375C5.08119 0.853277 5.15866 1.04031 5.15866 1.23534V3.07664Z" fill="#CECECE"/>
                <path d="M4.42365 6.02844C4.56915 6.02857 4.71134 6.07182 4.83226 6.15275C4.95317 6.23367 5.04738 6.34862 5.10297 6.48308C5.15857 6.61753 5.17305 6.76545 5.14459 6.90814C5.11613 7.05082 5.046 7.18187 4.94308 7.2847C4.84015 7.38754 4.70905 7.45755 4.56634 7.48589C4.42363 7.51423 4.27572 7.49963 4.14132 7.44392C4.00691 7.38821 3.89203 7.2939 3.81121 7.17292C3.73039 7.05194 3.68726 6.90971 3.68726 6.76421V6.02844H4.42365Z" fill="#CECECE"/>
                <path d="M4.42332 5.65817C4.2283 5.65817 4.04127 5.5807 3.90336 5.4428C3.76546 5.30489 3.68799 5.11786 3.68799 4.92284C3.68799 4.72781 3.76546 4.54078 3.90336 4.40287C4.04127 4.26497 4.2283 4.1875 4.42332 4.1875H6.26463C6.45966 4.1875 6.64669 4.26497 6.78459 4.40287C6.9225 4.54078 6.99997 4.72781 6.99997 4.92284C6.99997 5.11786 6.9225 5.30489 6.78459 5.4428C6.64669 5.5807 6.45966 5.65817 6.26463 5.65817H4.42332Z" fill="#CECECE"/>
              </svg>
            </div></a>

            <a href=""><div>
              <svg width="19" height="20" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.79934 4.74375C6.85082 4.51214 6.8765 4.27555 6.8759 4.03829C6.8759 2.22079 5.38076 0.746102 3.53546 0.746102C3.34428 0.745964 3.15342 0.761642 2.96484 0.792977C2.65644 0.600451 2.29996 0.4989 1.9364 0.500009C0.867974 0.500009 1.04267e-05 1.35501 1.04267e-05 2.4086C-0.00112641 2.74892 0.0907203 3.08308 0.265634 3.375C0.220901 3.59274 0.198286 3.81444 0.198134 4.03672C0.198134 5.85609 1.69328 7.3289 3.53671 7.3289C3.74154 7.32942 3.946 7.31112 4.14748 7.27422C4.42991 7.42294 4.74438 7.50045 5.06357 7.5C6.13388 7.5 6.99997 6.645 6.99997 5.59141C7.00175 5.29689 6.93296 5.00622 6.79934 4.74375ZM5.24998 5.60938C5.09498 5.82438 4.86701 5.99578 4.5717 6.11609C4.27639 6.23641 3.92749 6.29688 3.52639 6.29688C3.04687 6.29688 2.64578 6.21297 2.33031 6.04891C2.11162 5.93382 1.92301 5.76897 1.77969 5.56766C1.63734 5.36719 1.56625 5.16672 1.56625 4.97391C1.56625 4.8536 1.61313 4.74969 1.70484 4.66219C1.79609 4.57828 1.91453 4.53453 2.05312 4.53453C2.16797 4.53453 2.2664 4.56735 2.34671 4.63485C2.42328 4.6986 2.4889 4.79344 2.54171 4.91735C2.5929 5.03602 2.65754 5.14842 2.73437 5.25235C2.8002 5.33797 2.89322 5.40906 3.01343 5.46563C3.13562 5.52219 3.2978 5.55125 3.4978 5.55125C3.77311 5.55125 3.9992 5.49297 4.16873 5.37813C4.33655 5.26688 4.41686 5.13203 4.41686 4.96797C4.41686 4.8386 4.37483 4.73641 4.28733 4.65625C4.19623 4.57235 4.07764 4.50672 3.92999 4.46297C3.77858 4.4161 3.57264 4.36641 3.31733 4.3136C2.97093 4.24063 2.67671 4.15313 2.44234 4.05469C2.20359 3.95438 2.01031 3.81407 1.86797 3.64094C1.72391 3.46407 1.65281 3.24172 1.65281 2.98094C1.65037 2.73992 1.73011 2.50526 1.8789 2.31563C2.02843 2.12423 2.24547 1.97469 2.52812 1.87266C2.80531 1.77063 3.1353 1.71954 3.50718 1.71954C3.80624 1.71954 4.06702 1.75423 4.28576 1.81985C4.50451 1.88548 4.69061 1.97844 4.83826 2.09141C4.98592 2.20438 5.09357 2.32469 5.16279 2.45079C5.23201 2.57688 5.26685 2.70422 5.26685 2.82579C5.26685 2.94235 5.22123 3.05 5.12998 3.14297C5.08572 3.18902 5.03243 3.22543 4.97343 3.2499C4.91444 3.27436 4.85102 3.28637 4.78717 3.28516C4.66326 3.28516 4.56654 3.25594 4.4992 3.19766C4.4367 3.14297 4.37155 3.05907 4.30045 2.93688C4.21655 2.78204 4.11623 2.65797 4.00139 2.57047C3.88827 2.48672 3.70233 2.44297 3.44343 2.44297C3.20452 2.44297 3.00952 2.48985 2.8653 2.5836C2.72671 2.67297 2.65921 2.77688 2.65921 2.89891C2.65749 2.96883 2.68151 3.03695 2.72671 3.09032C2.7817 3.15359 2.84943 3.20454 2.92546 3.23985C3.01108 3.28289 3.10087 3.31707 3.19343 3.34188C3.28718 3.3675 3.4414 3.40579 3.65483 3.45313C3.92639 3.50969 4.17436 3.57532 4.39326 3.64266C4.61576 3.71375 4.80717 3.79891 4.96389 3.89969C5.11953 3.99796 5.24906 4.13247 5.34138 4.29172C5.43076 4.44797 5.47638 4.64532 5.47638 4.87141C5.48631 5.13589 5.40652 5.39596 5.24998 5.60938Z" fill="#CECECE"/>
              </svg>
            </div>  </a>    
        </div>
        </div>
      </div>
    </section>
  )
}

export default Contact