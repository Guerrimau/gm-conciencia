import { Card, CardBody, CardFooter } from "@nextui-org/react"

const TestimoniesSection = () => {
  return (
    <section id="testimonies" className="mt-36">
      <h3 className="text-2xl md:text-4xl font-semibold text-center">Testimonios</h3>
      <div className="overflow-y-auto mt-10 pb-2">
        <div className="w-fit flex gap-5 mx-5 md:mx-0">
          {[...Array(10).keys()].map((item) => (
            <Card key={item} className="shadow-none bg-light-sand border-solid border-1 border-primary-500 text-primary-500 w-[320px]">
              <CardBody className="text-xl font-extralight">{`"Todo excelente, muy buena atencion por parte del doctor. Respondio mis preguntas a detalle en todo momento"`}</CardBody>
              <CardFooter className=" font-semibold"> - Enrique</CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimoniesSection