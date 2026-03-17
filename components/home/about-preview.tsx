import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function AboutPreview() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-heading font-bold">Nossa História</h2>
          <p className="text-muted-foreground leading-relaxed">
            A Lumina Joias nasceu da paixão por criar peças únicas que realçam a beleza 
            natural de cada mulher. Há mais de 10 anos no mercado, nos especializamos em 
            semijoias de alta qualidade, folheadas a ouro 18k.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Cada peça é cuidadosamente selecionada e passa por rigoroso controle de 
            qualidade, garantindo durabilidade e brilho duradouro. Nossa missão é 
            democratizar o acesso à elegância e sofisticação.
          </p>
          <Link href="/sobre">
            <Button variant="outline" size="lg">
              Conheça Nossa História
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <Image
            src="/jewelry-crafting.png"
            alt="Processo de criação das joias"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
        </div>
      </div>
    </section>
  )
}
