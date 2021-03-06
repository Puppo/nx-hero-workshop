import { Controller, Get } from '@nestjs/common';
import { HeroDTO } from '@flowing/hero/api-interfaces';

@Controller('hero')
export class HeroControllerController {
  private heros: HeroDTO[] = [
    {
      id: '732',
      name: 'Ironman',
      powerstats: {
        intelligence: 100,
        strength: 85,
        speed: 58,
        durability: 85,
        power: 100,
        combat: 64,
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/85.jpg',
    },
    {
      id: '332',
      name: 'Hulk',
      powerstats: {
        intelligence: 88,
        strength: 100,
        speed: 63,
        durability: 100,
        power: 98,
        combat: 85,
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/83.jpg',
    },
    {
      id: '149',
      name: 'Captain America',
      powerstats: {
        intelligence: 69,
        strength: 19,
        speed: 38,
        durability: 55,
        power: 60,
        combat: 100,
      },
      image: 'https://www.superherodb.com/pictures2/portraits/10/100/274.jpg',
    },
  ];
  @Get()
  public get(): Promise<HeroDTO[]> {
    return Promise.resolve(this.heros);
  }
}
