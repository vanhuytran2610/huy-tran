import { Button } from "antd";
import { Badge } from "antd";
import {
  GithubOutlined,
  LinkedinFilled,
  MailFilled,
  DownloadOutlined,
  ArrowDownOutlined,
  StarFilled,
} from "@ant-design/icons";
import { ImageWithFallback } from "./ImageWithFallback";
import profile from "../assets/images/1.png";
import file from "../../public/Resume_VanHuyTran.pdf";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-secondary/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 12 }, (_, i) => (
              <div
                key={i}
                className="border-r border-foreground/10 h-full"
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <div className="flex justify-center lg:justify-start">
              <Badge className="px-6 py-3 bg-primary/10 text-primary border border-gray-500 backdrop-blur-sm rounded-lg bg-gray-200 font-primaryRegular">
                <StarFilled className="h-4 w-4 mr-2" />
                Available for Work
              </Badge>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-primaryMedium">
                <span className="block">Hello, I'm</span>
                <span className="block bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text pt-1">
                  Tran Van Huy
                </span>
              </h1>

              <div className="space-y-5 font-primaryRegular">
                <p className="text-xl sm:text-2xl text-muted-foreground max-w-lg">
                  Software Engineer crafting digital experiences with
                  <span className="text-primary"> 3+ years</span> of expertise
                </p>

                <p className="text-lg text-muted-foreground/80 max-w-md">
                  Specializing in full-stack, AI development, and scalable
                  solutions that drive business growth.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="large"
                color="default"
                variant="solid"
                className="px-8 py-6 bg-gray-900"
              >
                <a
                  href={file} // ← đường dẫn từ root (public folder)
                  download="Resume_VanHuyTran.pdf" // ← tên file khi download
                  className="relative z-10 flex items-center gap-2 text-white no-underline hover:text-white font-primaryRegular"
                >
                  <DownloadOutlined className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <Button
                size="large"
                color="default"
                variant="filled"
                className="px-8 py-6 border-1 font-primaryRegular scroll-mt-10"
                onClick={() => {
                  const skillsSection = document.querySelector("#skills");
                  if (skillsSection) {
                    skillsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start", // scroll tới đầu section
                    });
                  }
                }}
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                size="medium"
                className="h-12 w-12 rounded-full transition-all duration-300"
              >
                <a
                  href="https://github.com/vanhuytran2610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-5 w-5 transition-colors"
                >
                  <GithubOutlined />
                </a>
              </Button>
              <Button
                size="medium"
                className="h-12 w-12 rounded-full transition-all duration-300"
              >
                <a
                  href="https://www.linkedin.com/in/van-huy-tran-095728186"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-5 w-5 transition-colors"
                >
                  <LinkedinFilled />
                </a>
              </Button>
              <Button
                size="medium"
                className="h-12 w-12 rounded-full transition-all duration-300"
              >
                <a
                  href="mailto:vanhuytran2610@gmail.com"
                  className="transition-colors h-5 w-5"
                >
                  <MailFilled />
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1">5+</div>
                <div className="text-sm text-muted-foreground font-primaryRegular">
                  Projects
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1">3+</div>
                <div className="text-sm text-muted-foreground font-primaryRegular">
                  Years Exp
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl mb-1">100%</div>
                <div className="text-sm text-muted-foreground font-primaryRegular">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-60"></div>
              <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-gradient-to-tl from-accent/30 to-primary/10 rounded-full blur-3xl opacity-40"></div>

              {/* Main Image Container */}
              <div className="relative z-10 group">
                <div className="relative w-80 h-80 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-sm border-4 border-background/50 shadow-2xl">
                  <ImageWithFallback
                    src={profile}
                    alt="Huy Tran - Software Engineer"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-full"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-5 bg-gray-100 border border-gray-400 rounded-xl px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-primaryRegular">
                      Available for hire
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-sm text-muted-foreground font-primaryRegular">
              Scroll to explore
            </span>
            <ArrowDownOutlined className="h-5 w-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}
