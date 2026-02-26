import { Card } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";

export function Contact() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12 font-primaryMedium">
          <h2 className="text-3xl md:text-4xl tracking-wide">Let's Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how my
            expertise in full-stack and AI development can help achieve your
            goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card
            className="bg-gray-50 border-gray-300 rounded-xl shadow-sm hover:shadow transition-shadow"
            style={{ height: "160px" }}
          >
            <div className="h-[110px] flex flex-col items-center justify-center gap-3 px-4 text-center">
              <a
                href="mailto:vanhuytran2610@gmail.com"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                <MailOutlined style={{ fontSize: "24px", color: "#555" }} />
              </a>

              <div className="space-y-1">
                <h4 className="font-primaryBold text-base">Email</h4>
                <a
                  href="mailto:vanhuytran2610@gmail.com?subject=Hello%20from%20your%20website"
                  className="font-primaryRegular text-sm text-gray-600"
                >
                  vanhuytran2610@gmail.com
                </a>
              </div>
            </div>
          </Card>

          <Card
            className="bg-gray-50 border-gray-300 rounded-xl shadow-sm hover:shadow transition-shadow"
            style={{ height: "160px" }}
          >
            <div className="h-[110px] flex flex-col items-center justify-center gap-3 px-4 text-center">
              <a
                href="tel:+84776957352"
                className="text-gray-700 hover:text-green-600 transition-colors"
              >
                <PhoneOutlined style={{ fontSize: "24px", color: "#555" }} />
              </a>

              <div className="space-y-1">
                <h4 className="font-primaryBold text-base">Phone</h4>
                <a
                  href="tel:+84776957352"
                  className="font-primaryRegular text-sm text-gray-600"
                >
                  +84 776 957 352
                </a>
              </div>
            </div>
          </Card>

          <Card
            className="bg-gray-50 border-gray-300 rounded-xl shadow-sm hover:shadow transition-shadow"
            style={{ height: "160px" }}
          >
            <div className="h-[110px] flex flex-col items-center justify-center gap-3 px-4 text-center">
              <EnvironmentFilled style={{ fontSize: "24px", color: "#555" }} />
              <div className="space-y-1">
                <h4 className="font-primaryBold text-base">Location</h4>
                <p className="font-primaryRegular text-sm text-gray-600">
                  Remote or Onsite (Da Nang, Vietnam)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
