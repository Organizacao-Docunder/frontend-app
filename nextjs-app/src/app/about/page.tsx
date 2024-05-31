import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <nav className="w-full flex justify-center items-center">
        <div className="max-w-7xl w-full">
          <h1 className="text-h1 text-center p-24 text-primary-1 font-weight-bold">Com Docunder, você cria documentação técnica profissional e de alta qualidade para seus projetos de software</h1>
        </div>
      </nav>
    </main>
  )
}