import { SelectedPage } from "@/shared/type"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import { motion } from "framer-motion"
import HText from "@/shared/HText"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const index = ({ setSelectedPage }: Props) => {

  const inputStyle = `mb-5 w-full rounded-lg bg-primary-300 px-3 py-5 placeholder-white`

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
        e.preventDefault()
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
        <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            {/* Header */}
            <motion.div
              className="md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
                <HText>
                    <span className="text-primary-500">join now </span>
                    to get in shape
                </HText>
                <p className="my-5">
                    Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                    sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                    adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                </p>
            </motion.div>

            {/* Form and Image */}
            <div className="mt-10 justify-between gap-8 md:flex">
                <motion.div
                  className="mt-10 basis-3/5 md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                  }}
                >
                    <form 
                      target="_blank"
                      onSubmit={onSubmit}
                      method="POST"
                      action="https://formsubmit.co/caf6ecc774f97e41c41b311aef6cb003"
                    >
                        <input
                            className={inputStyle}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && 
                          <p className="mt-1 text-primary-500">
                            {errors.name.type === 'required' && 'This field is required'}
                            {errors.name.type === 'maxLength' && 'Max length is 100 character'}
                          </p>}
                        <input
                            type="email"
                            placeholder="EMAIL"
                            className={inputStyle}
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.name && 
                          <p className="mt-1 text-primary-500">
                            {errors.name.type === 'required' && 'This field is required'}
                            {errors.name.type === 'pattern' && 'Invalid email address'}
                          </p>}
                        <textarea
                          className={inputStyle}
                          rows={4}
                          cols={50}
                          placeholder="MESSAGE"
                          {...register("message", {
                              required: true,
                              maxLength: 2000,
                          })}
                        />
                        {errors.name && 
                          <p className="mt-1 text-primary-500">
                            {errors.name.type === 'required' && 'This field is required'}
                            {errors.name.type === 'maxLength' && 'Max length is 2000 character'}
                          </p>}

                        <button type="submit" className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white hover:scale-105">SUBMIT</button>
                    </form>
                </motion.div>
                <motion.div
                  className="relative mt-16 basis-2/5 md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                    <img className="w-full" src={ContactUsPageGraphic} alt="contact-us-page-graphic" />
                  </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default index