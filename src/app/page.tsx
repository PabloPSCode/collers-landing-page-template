"use client";

import RevealContainer from "@/components/animations-and-loading/RevealContainer";
import ZoomContainer from "@/components/animations-and-loading/ZoomContainer";
import Button from "@/components/buttons/Button";
import CategoryCard from "@/components/cards/CategoryCard";
import InfoCard from "@/components/cards/InfoCard";
import MetricsCard from "@/components/cards/MetricsCard";
import ProductCard, { Rating } from "@/components/cards/ProductCard";
import Footer from "@/components/elements/Footer";
import LandingHeader from "@/components/elements/LandingHeader";
import { Section } from "@/components/elements/Section";
import BrandMarquee from "@/components/marketing/BrandMarquee";
import MobileSeal from "@/components/marketing/MobileSeal";
import ProductImageVisualizer from "@/components/media/ProductImageVisualizer";
import Paragraph from "@/components/typography/Paragraph";
import Subtitle from "@/components/typography/Subtitle";
import Title from "@/components/typography/Title";
import { useState, type CSSProperties } from "react";

import VideoSection from "@/components/elements/VideoSection";
import {
  brandLogos,
  categoryItems,
  featuredProducts,
  footerColumns,
  galleryImages,
  headerLogo,
  heroFeatures,
  landingNavItems,
  socialLinks,
  stats,
} from "@/mocks/landing-v2";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = (open: boolean) => {
    setMenuOpen(open);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="relative z-50">
        <LandingHeader.Root className="bg-background/90 backdrop-blur border-b border-foreground/10">
          <LandingHeader.Left className="gap-3">
            <LandingHeader.Logo src={headerLogo.src} alt={headerLogo.alt} />
            <Subtitle
              content={headerLogo.name}
              className="text-sm sm:text-base text-foreground"
            />
          </LandingHeader.Left>

          <LandingHeader.Center>
            <LandingHeader.Nav>
              {landingNavItems.map((item) => (
                <LandingHeader.Nav.Item key={item.href} href={item.href}>
                  {item.label}
                </LandingHeader.Nav.Item>
              ))}
            </LandingHeader.Nav>
          </LandingHeader.Center>

          <LandingHeader.Right className="gap-3">
            <LandingHeader.MobileMenuToggle
              open={menuOpen}
              onToggle={handleToggleMenu as never}
            />
            <LandingHeader.CTA
              label="Comprar o Pro Azul"
              className="bg-secondary-900 text-white hover:bg-secondary-800"
            />
          </LandingHeader.Right>
        </LandingHeader.Root>

        <LandingHeader.MobileMenuPanel
          open={menuOpen}
          cta={
            <LandingHeader.CTA
              label="Quero meu Pro Azul"
              className="bg-secondary-900 text-white hover:bg-secondary-800"
            />
          }
        >
          {landingNavItems.map((item) => (
            <LandingHeader.Nav.Item
              key={`${item.href}-mobile`}
              href={item.href}
              onClick={handleCloseMenu}
            >
              {item.label}
            </LandingHeader.Nav.Item>
          ))}
        </LandingHeader.MobileMenuPanel>
      </div>

      <main className="flex flex-col">
        <VideoSection
          size="full"
          videoUrl="/videos/sneakers.mov"
          // videoUrl="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
          title="Tênis colecionáveis feitos para a rua brasileira"
          description="Performance e estilo que acompanham seu ritmo urbano."
          primaryButtonTitle="Comprar o Pro Azul"
          secondaryButtonTitle="Explorar modelos"
          containerClassName="h-[80vh]"
          onPrimaryClick={() => console.log("Primary click")}
          onSecondaryClick={() => console.log("Secondary click")}
        />

        <Section size="full" sectionClassName="bg-background py-10">
          <div className="w-full max-w-7xl grid gap-6 md:grid-cols-3">
            {heroFeatures.map((feature, index) => (
              <RevealContainer key={feature.title} once delay={index * 2}>
                <InfoCard
                  title={feature.title}
                  text={feature.text}
                  icon={feature.icon}
                  itemsPosition="left"
                />
              </RevealContainer>
            ))}
          </div>
        </Section>

        <div id="colecao">
          <Section
            size="full"
            sectionClassName="bg-secondary-900 text-white py-16"
          >
            <div className="w-full max-w-7xl flex flex-col gap-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="max-w-xl flex flex-col gap-4">
                  <Title
                    content="O melhor do melhor"
                    element="h2"
                    className="text-white text-3xl sm:text-4xl"
                  />
                  <Paragraph
                    content="Seleção premium de tênis nacionais com tecnologia e acabamento de coleção."
                    className="text-white/70"
                  />
                </div>
                <Button
                  label="Assinar novidades"
                  variant="outlined"
                  className="border-white/70 text-white hover:bg-white/10"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {featuredProducts.map((product, index) => (
                  <RevealContainer
                    key={product.title}
                    delay={index * 2}
                    className="h-full"
                    once
                  >
                    <ProductCard
                      imageUrl={product.imageUrl}
                      title={product.title}
                      price={product.price}
                      rating={product.rating as Rating}
                      dealEndsWithIn={product.dealEndsWithIn}
                    />
                  </RevealContainer>
                ))}
              </div>
            </div>
          </Section>
        </div>

        <Section size="full" sectionClassName="pt-4">
          <BrandMarquee
            logos={brandLogos}
            title="Marcas nacionais que caminham com a gente"
            itemsGap="close"
            imageFilter="grayscale"
          />
        </Section>

        <Section size="full" sectionClassName="bg-secondary-900 py-16">
          <div className="w-full max-w-7xl grid gap-12 lg:grid-cols-[1fr_1.1fr] items-center">
            <div className="flex flex-col gap-6">
              <Title
                content="Cresça sua coleção"
                element="h2"
                className="text-3xl sm:text-4xl text-white"
              />
              <Paragraph
                content="Monte sua curadoria com modelos urbanos, edições limitadas e lançamentos pensados para o clima brasileiro."
                className="text-white/70"
              />
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {categoryItems.map((category) => (
                  <CategoryCard
                    key={category.name}
                    name={category.name}
                    href={category.href}
                    icon={category.icon}
                  />
                ))}
              </div>
              <Button
                label="Explorar categorias"
                variant="outlined"
                className="rounded-full px-5 py-3 text-sm sm:text-base border-background text-white "
              />
            </div>

            <ZoomContainer once className="w-full bg-secondary-900">
              <ProductImageVisualizer
                images={galleryImages}
                className="bg-secondary-900 text-white/50"
              />
            </ZoomContainer>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="relative overflow-hidden bg-background text-white py-16"
        >
          <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-primary-400/30 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-10 h-32 w-32 rounded-full bg-primary-300/40" />
          <div className="relative z-10 w-full max-w-7xl flex flex-col gap-10">
            <div className="max-w-2xl flex flex-col gap-4">
              <Title
                content="O Brasil inteiro calçando Passo"
                element="h2"
                className="text-3xl sm:text-4xl"
              />
              <Paragraph content="Números que mostram a força da nossa comunidade e a confiança no tênis brasileiro." />
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {stats.map((item) => (
                <MetricsCard
                  key={item.title}
                  preTitle={item.preTitle}
                  value={item.value}
                  title={item.title}
                  icon={item.icon}
                  countDuration={3}
                  className="bg-white border-white/10"
                />
              ))}
            </div>
          </div>
        </Section>

        <Section
          size="full"
          sectionClassName="bg-secondary-950 text-white py-16"
        >
          <div className="w-full max-w-7xl flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-4 max-w-xl">
              <Title
                content="Colecione mais tênis hoje"
                element="h2"
                className="text-white text-3xl sm:text-4xl"
              />
              <Paragraph
                content="Cadastre-se para receber alertas de lançamento, conteúdos exclusivos e condições especiais."
                className="text-white/70"
              />
              <div className="flex flex-wrap gap-3">
                <Button
                  label="Quero meu par"
                  variant="filled"
                  className="rounded-full px-5 py-3 text-sm sm:text-base bg-primary-400 text-secondary-900 hover:bg-primary-300"
                />
                <Button
                  label="Falar com especialista"
                  variant="outlined"
                  className="rounded-full px-5 py-3 text-sm sm:text-base border-white/60 text-white hover:bg-white/10"
                />
              </div>
            </div>
            <MobileSeal
              showAppStoreLogo
              showGooglePlayLogo
              containerClassName="self-start"
              itemClassName="border-white/10"
            />
          </div>
        </Section>
      </main>

      <Footer.Root
        bordered={false}
        className="bg-secondary-950"
        style={
          {
            "--color-background": "#050A14",
            "--color-foreground": "#F8FAFC",
            "--color-bg-card": "#0B1429",
            "--color-border-card": "#1E2A44",
          } as CSSProperties
        }
      >
        <Footer.Top columns={4} bordered className="text-white">
          {footerColumns.map((column) => (
            <Footer.Column
              key={column.title}
              title={column.title}
              items={column.items}
            />
          ))}
        </Footer.Top>
        <Footer.SocialRow
          items={socialLinks}
          title="Siga a Passo Brasil"
          iconsClassName="text-white"
        />
        <Footer.Bottom bordered>
          <Paragraph
            content="© 2026 Passo Brasil. Todos os direitos reservados."
            className="text-xs text-white/70"
          />
        </Footer.Bottom>
      </Footer.Root>
    </div>
  );
}
