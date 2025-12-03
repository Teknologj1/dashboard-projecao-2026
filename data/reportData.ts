import { DadosConsolidados } from '@/types/reports';

export const reportData: DadosConsolidados = {
  relatorios: [
    {
      ano: 2020,
      mes: 1,
      mesNome: 'Janeiro',
      totalVendas: 79492.50,
      totalPorEspecialidade: {
              "Dentística": 400,
              "Prevenção": 500,
              "Outros": 78592.5
      },
      totalPorTratamento: {
              "Clareamento em Consultório": 400,
              "Toxina Botulínica Testa": 1600,
              "Profilaxia + Polimento Coronário - Limpeza": 500,
              "Consulta odontológica": 76992.5
      },
      tratamentosPorEspecialidade: {
              "Dentística": {
                      "Clareamento em Consultório": 400
              },
              "Prevenção": {
                      "Profilaxia + Polimento Coronário - Limpeza": 500
              },
              "Outros": {
                      "Toxina Botulínica Testa": 1600,
                      "Consulta odontológica": 76992.5
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 2,
      mesNome: 'Fevereiro',
      totalVendas: 62406.50,
      totalPorEspecialidade: {
              "Prevenção": 2800,
              "Outros": 59606.5
      },
      totalPorTratamento: {
              "Profilaxia + Polimento Coronário - Limpeza": 800,
              "Aplicação de Selante de Fóssulas e Fissuras": 2000,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 2400,
              "Consulta odontológica": 57206.5
      },
      tratamentosPorEspecialidade: {
              "Prevenção": {
                      "Profilaxia + Polimento Coronário - Limpeza": 800,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2000
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 2400,
                      "Consulta odontológica": 57206.5
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 3,
      mesNome: 'Março',
      totalVendas: 43554.00,
      totalPorEspecialidade: {
              "Cirurgia": 1200,
              "Dentística": 600,
              "Endodontia": 1400,
              "Ortodontia": 300,
              "Prevenção": 2600,
              "Prótese": 2350,
              "Outros": 35104
      },
      totalPorTratamento: {
              "Remoção de Corpo Estranho Intra-Canal": 800,
              "Toxina Botulínica Testa": 3400,
              "Profilaxia + Polimento Coronário - Limpeza": 2600,
              "Coroa Total em Cerâmica Pura": 2350,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1000,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1200,
              "Exodontia de Dentes Inclusos / Impactados": 900,
              "Exodontia Simples de Decíduo": 300,
              "Restauração em Resina Fotopolimerizável 1 face": 600,
              "Tratamento Endodôntico Multirradicular": 600,
              "Consulta de Retorno": 450,
              "Consulta odontológica": 29054,
              "Manutenção de Aparelho Ortodôntico Fixo": 300
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia de Dentes Inclusos / Impactados": 900,
                      "Exodontia Simples de Decíduo": 300
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 600
              },
              "Endodontia": {
                      "Remoção de Corpo Estranho Intra-Canal": 800,
                      "Tratamento Endodôntico Multirradicular": 600
              },
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 300
              },
              "Prevenção": {
                      "Profilaxia + Polimento Coronário - Limpeza": 2600
              },
              "Prótese": {
                      "Coroa Total em Cerâmica Pura": 2350
              },
              "Outros": {
                      "Toxina Botulínica Testa": 3400,
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1000,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1200,
                      "Consulta de Retorno": 450,
                      "Consulta odontológica": 29054
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 4,
      mesNome: 'Abril',
      totalVendas: 52035.00,
      totalPorEspecialidade: {
              "Endodontia": 2750,
              "Urgência": 600,
              "Outros": 43685,
              "Harmonização facial": 5000
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 200,
              "Preenchimento de olheiras": 1200,
              "Tratamento Endodôntico Multirradicular": 2750,
              "Consulta odontológica": 43685,
              "Consulta Odontológica de Urgência": 600,
              "Preenchimento de mandíbula": 3600
      },
      tratamentosPorEspecialidade: {
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 2750
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Consulta odontológica": 43685
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 200,
                      "Preenchimento de olheiras": 1200,
                      "Preenchimento de mandíbula": 3600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 5,
      mesNome: 'Maio',
      totalVendas: 23923.33,
      totalPorEspecialidade: {
              "Periodontia": 1000,
              "Prótese": 2733.33,
              "Outros": 20190
      },
      totalPorTratamento: {
              "Enxerto com Osso Liofilizado": 1000,
              "Coroa Total em Cerômero": 1800,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1800,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1000,
              "Consulta odontológica": 17390,
              "Provisório para Faceta": 933.33
      },
      tratamentosPorEspecialidade: {
              "Periodontia": {
                      "Enxerto com Osso Liofilizado": 1000
              },
              "Prótese": {
                      "Coroa Total em Cerômero": 1800,
                      "Provisório para Faceta": 933.33
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1800,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1000,
                      "Consulta odontológica": 17390
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 6,
      mesNome: 'Junho',
      totalVendas: 63820.00,
      totalPorEspecialidade: {
              "Endodontia": 1200,
              "Implantodontia": 9000,
              "Periodontia": 4000,
              "Prevenção": 1000,
              "Outros": 38620,
              "Harmonização facial": 10000
      },
      totalPorTratamento: {
              "Instalação de implante cone morse": 9000,
              "Enxerto com Osso Liofilizado": 500,
              "Profilaxia + Polimento Coronário - Limpeza": 1000,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 2400,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 3600,
              "Tratamento Endodôntico Multirradicular": 1200,
              "Consulta odontológica": 32620,
              "Enxerto Gengival Livre": 3500,
              "Bioestimulador de colágeno": 10000
      },
      tratamentosPorEspecialidade: {
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 1200
              },
              "Implantodontia": {
                      "Instalação de implante cone morse": 9000
              },
              "Periodontia": {
                      "Enxerto com Osso Liofilizado": 500,
                      "Enxerto Gengival Livre": 3500
              },
              "Prevenção": {
                      "Profilaxia + Polimento Coronário - Limpeza": 1000
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 2400,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 3600,
                      "Consulta odontológica": 32620
              },
              "Harmonização facial": {
                      "Bioestimulador de colágeno": 10000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 7,
      mesNome: 'Julho',
      totalVendas: 38290.33,
      totalPorEspecialidade: {
              "Endodontia": 5150,
              "Implantodontia": 9000,
              "Ortodontia": 827,
              "Periodontia": 1950,
              "Prótese": 3466.67,
              "Outros": 12596.66,
              "Harmonização facial": 5300
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 3600,
              "Tratamento Endodôntico Unirradicular": 2000,
              "Preenchimento de olheiras": 700,
              "Instalação de implante cone morse": 9000,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 600,
              "Placa de mordida miorelaxante": 1950,
              "Tratamento Endodôntico Birradicular": 3150,
              "Consulta odontológica": 11996.66,
              "Prótese Total (PT)": 3000,
              "Provisório para Faceta": 466.67,
              "Bioestimulador de colágeno": 1000,
              "Aparelho Ortodôntico Fixo Metálico": 327,
              "Manutenção de Aparelho Ortodôntico Fixo": 500
      },
      tratamentosPorEspecialidade: {
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 2000,
                      "Tratamento Endodôntico Birradicular": 3150
              },
              "Implantodontia": {
                      "Instalação de implante cone morse": 9000
              },
              "Ortodontia": {
                      "Aparelho Ortodôntico Fixo Metálico": 327,
                      "Manutenção de Aparelho Ortodôntico Fixo": 500
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 1950
              },
              "Prótese": {
                      "Prótese Total (PT)": 3000,
                      "Provisório para Faceta": 466.67
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 600,
                      "Consulta odontológica": 11996.66
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3600,
                      "Preenchimento de olheiras": 700,
                      "Bioestimulador de colágeno": 1000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 8,
      mesNome: 'Agosto',
      totalVendas: 53657.50,
      totalPorEspecialidade: {
              "Ortodontia": 425,
              "Prótese": 9950,
              "Outros": 35092.5,
              "Harmonização facial": 8190
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 5463.34,
              "Coroa Total em Cerâmica Pura": 3750,
              "Consulta odontológica": 35092.5,
              "Faceta em Cerâmica Pura": 6200,
              "Preenchimento de malar": 2726.66,
              "Manutenção de Aparelho Ortodôntico Fixo": 425
      },
      tratamentosPorEspecialidade: {
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 425
              },
              "Prótese": {
                      "Coroa Total em Cerâmica Pura": 3750,
                      "Faceta em Cerâmica Pura": 6200
              },
              "Outros": {
                      "Consulta odontológica": 35092.5
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 5463.34,
                      "Preenchimento de malar": 2726.66
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 9,
      mesNome: 'Setembro',
      totalVendas: 92339.17,
      totalPorEspecialidade: {
              "Dentística": 400,
              "Endodontia": 1000,
              "Periodontia": 2000,
              "Prevenção": 150,
              "Prótese": 1900,
              "Outros": 74189.17,
              "Harmonização facial": 12700
      },
      totalPorTratamento: {
              "Aplicação Tópica de Verniz Fluoretado": 150,
              "Toxina botulínica (botox)": 10000,
              "Restauração em Resina Fotopolimerizável 2 faces": 400,
              "Remoção de Corpo Estranho Intra-Canal": 500,
              "Tratamento Endodôntico Unirradicular": 500,
              "Coroa Total em Cerâmica Pura": 1900,
              "Placa de mordida miorelaxante": 2000,
              "Consulta odontológica": 74189.17,
              "Preenchimento labial": 2700
      },
      tratamentosPorEspecialidade: {
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 400
              },
              "Endodontia": {
                      "Remoção de Corpo Estranho Intra-Canal": 500,
                      "Tratamento Endodôntico Unirradicular": 500
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 2000
              },
              "Prevenção": {
                      "Aplicação Tópica de Verniz Fluoretado": 150
              },
              "Prótese": {
                      "Coroa Total em Cerâmica Pura": 1900
              },
              "Outros": {
                      "Consulta odontológica": 74189.17
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 10000,
                      "Preenchimento labial": 2700
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 10,
      mesNome: 'Outubro',
      totalVendas: 76989.84,
      totalPorEspecialidade: {
              "Cirurgia": 150,
              "Dentística": 6450,
              "Endodontia": 2900,
              "Implantodontia": 4900,
              "Ortodontia": 550,
              "Periodontia": 7200,
              "Prevenção": 3550,
              "Prótese": 4600,
              "Urgência": 572,
              "Outros": 40717.84,
              "Harmonização facial": 5400
      },
      totalPorTratamento: {
              "Coroa Provisória sobre Implante": 900,
              "Toxina botulínica (botox)": 3900,
              "Clareamento Dentário Caseiro": 1200,
              "Bichectomia": 1500,
              "Restauração em Resina Fotopolimerizável 2 faces": 3750,
              "Tratamento Endodôntico em Dente Decíduo": 600,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1200,
              "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 500,
              "Profilaxia + Polimento Coronário - Limpeza": 1150,
              "Prótese Fixa Adesiva em Cerômero (metal free)": 2200,
              "Coroa Total em Cerômero": 1200,
              "Placa de mordida miorelaxante": 6000,
              "Exodontia Simples de Decíduo": 150,
              "Restauração em Resina Fotopolimerizável 1 face": 1500,
              "Tratamento Endodôntico Birradicular": 2300,
              "Coroa Total Metalo Cerâmica sobre Implante": 2000,
              "Instalação de Implante Ósseo Integrado": 2000,
              "Consulta Inicial": 160,
              "Consulta odontológica": 40057.84,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1200,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 1200,
              "Bloco Cerômero": 1200,
              "Consulta Odontológica de Urgência": 572,
              "Manutenção de Aparelho Ortodôntico Fixo": 550
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 150
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 1200,
                      "Restauração em Resina Fotopolimerizável 2 faces": 3750,
                      "Restauração em Resina Fotopolimerizável 1 face": 1500
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 600,
                      "Tratamento Endodôntico Birradicular": 2300
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 900,
                      "Coroa Total Metalo Cerâmica sobre Implante": 2000,
                      "Instalação de Implante Ósseo Integrado": 2000
              },
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 550
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 6000,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1200
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1200,
                      "Profilaxia + Polimento Coronário - Limpeza": 1150,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 1200
              },
              "Prótese": {
                      "Prótese Fixa Adesiva em Cerômero (metal free)": 2200,
                      "Coroa Total em Cerômero": 1200,
                      "Bloco Cerômero": 1200
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 572
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 500,
                      "Consulta Inicial": 160,
                      "Consulta odontológica": 40057.84
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3900,
                      "Bichectomia": 1500
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 11,
      mesNome: 'Novembro',
      totalVendas: 56685.19,
      totalPorEspecialidade: {
              "Cirurgia": 950,
              "Dentística": 5545.170000000002,
              "Endodontia": 2950,
              "Ortodontia": 1550,
              "Periodontia": 1450,
              "Prevenção": 6040.97,
              "Prótese": 5000,
              "Urgência": 350,
              "Outros": 23975.19,
              "Harmonização facial": 8873.86
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 3863.86,
              "Clareamento Dentário Caseiro": 2667.4700000000003,
              "Fios de sustentação (espiculado)": 1410,
              "Tratamento Endodôntico Unirradicular": 650,
              "Aparelho Expansor": 1000,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1440.97,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 2 Seringas": 500,
              "Aplicação de Selante de Fóssulas e Fissuras": 2000,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1000,
              "Placa de mordida miorelaxante": 1200,
              "Manutenção Aparelho Ortopédico": 250,
              "Exodontia Simples de Decíduo": 950,
              "Restauração em Ionômero de Vidro - 1 face": 300,
              "Restauração em Resina Fotopolimerizável 1 face": 2577.6999999999994,
              "Retratamento Endodôntico Multirradicular": 1800,
              "Tratamento Endodôntico Birradicular": 500,
              "Consulta odontológica": 22475.19,
              "Raspagem Supra-gengival (RAP) - Limpeza": 250,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 2600,
              "Faceta em Cerâmica Pura": 5000,
              "Consulta Odontológica de Urgência": 350,
              "Preenchimento labial": 1600,
              "Bioestimulador de colágeno": 2000,
              "Manutenção de Aparelho Ortodôntico Fixo": 300
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 950
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 2667.4700000000003,
                      "Restauração em Ionômero de Vidro - 1 face": 300,
                      "Restauração em Resina Fotopolimerizável 1 face": 2577.6999999999994
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 650,
                      "Retratamento Endodôntico Multirradicular": 1800,
                      "Tratamento Endodôntico Birradicular": 500
              },
              "Ortodontia": {
                      "Aparelho Expansor": 1000,
                      "Manutenção Aparelho Ortopédico": 250,
                      "Manutenção de Aparelho Ortodôntico Fixo": 300
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 1200,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 250
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1440.97,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2000,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 2600
              },
              "Prótese": {
                      "Faceta em Cerâmica Pura": 5000
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 350
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 2 Seringas": 500,
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1000,
                      "Consulta odontológica": 22475.19
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3863.86,
                      "Fios de sustentação (espiculado)": 1410,
                      "Preenchimento labial": 1600,
                      "Bioestimulador de colágeno": 2000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2020,
      mes: 12,
      mesNome: 'Dezembro',
      totalVendas: 111898.39,
      totalPorEspecialidade: {
              "Cirurgia": 2300,
              "Dentística": 3695.2,
              "Endodontia": 2856.06,
              "Implantodontia": 4500,
              "Ortodontia": 2625,
              "Prevenção": 5750,
              "Prótese": 16848.739999999998,
              "Outros": 58623.39,
              "Harmonização facial": 14700
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 5900,
              "Fios de sustentação (espiculado)": 4000,
              "Restauração em Resina Fotopolimerizável 2 faces": 1300,
              "Tratamento Endodôntico Unirradicular": 856.06,
              "Aparelho Expansor": 2500,
              "Tratamento Endodôntico em Dente Decíduo": 600,
              "Preenchimento de olheiras": 1400,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2400,
              "Coroa Cerômero": 1617.2,
              "Coroa Porcelana Pura": 2500,
              "Aplicação de Selante de Fóssulas e Fissuras": 1950,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1200,
              "Prótese Fixa Adesiva Direta (provisória)": 450,
              "Restauração resina dente de leite": 700,
              "Tratamento Odontológico": 2500,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 2400,
              "Pino Pré Fabricado": 366.88,
              "Exodontia Simples de Decíduo": 800,
              "Frenulectomia Lingual (Frenectomia)": 1200,
              "Ulectomia": 300,
              "Restauração em Ionômero de Vidro - 2 faces": 350,
              "Restauração em Resina Fotopolimerizável 1 face": 1345.1999999999998,
              "Tratamento Endodôntico Birradicular": 1400,
              "Instalação de Implante Ósseo Integrado": 4500,
              "Consulta odontológica": 52523.39,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 1400,
              "Faceta em Cerâmica Pura": 5800,
              "Prótese Parcial Removível com Grampos Bilateral (PPR)": 6114.66,
              "Preenchimento de mandíbula": 1600,
              "Rinomodelação": 1800,
              "Manutenção de Aparelho Ortodôntico Fixo": 125
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 800,
                      "Frenulectomia Lingual (Frenectomia)": 1200,
                      "Ulectomia": 300
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 1300,
                      "Restauração resina dente de leite": 700,
                      "Restauração em Ionômero de Vidro - 2 faces": 350,
                      "Restauração em Resina Fotopolimerizável 1 face": 1345.1999999999998
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 856.06,
                      "Tratamento Endodôntico em Dente Decíduo": 600,
                      "Tratamento Endodôntico Birradicular": 1400
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 4500
              },
              "Ortodontia": {
                      "Aparelho Expansor": 2500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 125
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2400,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1950,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 1400
              },
              "Prótese": {
                      "Coroa Cerômero": 1617.2,
                      "Coroa Porcelana Pura": 2500,
                      "Prótese Fixa Adesiva Direta (provisória)": 450,
                      "Pino Pré Fabricado": 366.88,
                      "Faceta em Cerâmica Pura": 5800,
                      "Prótese Parcial Removível com Grampos Bilateral (PPR)": 6114.66
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1200,
                      "Tratamento Odontológico": 2500,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 2400,
                      "Consulta odontológica": 52523.39
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 5900,
                      "Fios de sustentação (espiculado)": 4000,
                      "Preenchimento de olheiras": 1400,
                      "Preenchimento de mandíbula": 1600,
                      "Rinomodelação": 1800
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 1,
      mesNome: 'Janeiro',
      totalVendas: 149147.56,
      totalPorEspecialidade: {
              "Cirurgia": 2200,
              "Dentística": 3560,
              "Endodontia": 3350,
              "Ortodontia": 7730,
              "Periodontia": 1800,
              "Prevenção": 7850,
              "Outros": 121357.56,
              "Harmonização facial": 1300
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 1300,
              "Gengivoplastia": 1800,
              "Restauração em Resina Fotopolimerizável 2 faces": 2060,
              "Tratamento Endodôntico Unirradicular": 1450,
              "Aparelho Expansor": 3150,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2600,
              "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 500,
              "Aplicação de Selante de Fóssulas e Fissuras": 700,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1300,
              "Manutenção Aparelho Ortopédico": 2480,
              "Restauração resina dente de leite": 1500,
              "Tratamento Odontológico": 91700,
              "Exodontia de Dentes Inclusos / Impactados": 900,
              "Exodontia Simples de Decíduo": 1300,
              "Tratamento Endodôntico Multirradicular": 700,
              "Consulta Inicial": 2275,
              "Consulta odontológica": 25582.559999999998,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4550,
              "Aparelho Ortodôntico Fixo Metálico": 1500,
              "Manutenção de Aparelho Ortodôntico Fixo": 600
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia de Dentes Inclusos / Impactados": 900,
                      "Exodontia Simples de Decíduo": 1300
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 2060,
                      "Restauração resina dente de leite": 1500
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1450,
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Tratamento Endodôntico Multirradicular": 700
              },
              "Ortodontia": {
                      "Aparelho Expansor": 3150,
                      "Manutenção Aparelho Ortopédico": 2480,
                      "Aparelho Ortodôntico Fixo Metálico": 1500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 600
              },
              "Periodontia": {
                      "Gengivoplastia": 1800
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2600,
                      "Aplicação de Selante de Fóssulas e Fissuras": 700,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4550
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 500,
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1300,
                      "Tratamento Odontológico": 91700,
                      "Consulta Inicial": 2275,
                      "Consulta odontológica": 25582.559999999998
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 1300
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 2,
      mesNome: 'Fevereiro',
      totalVendas: 88337.50,
      totalPorEspecialidade: {
              "Cirurgia": 4550,
              "Dentística": 725,
              "Ortodontia": 7075,
              "Periodontia": 3000,
              "Prevenção": 9334.5,
              "Prótese": 2000,
              "Outros": 49503,
              "Harmonização facial": 12150
      },
      totalPorTratamento: {
              "Aplicação Tópica de Verniz Fluoretado": 350,
              "Toxina botulínica (botox)": 4600,
              "Clareamento Dentário Caseiro": 100,
              "Restauração em Resina Fotopolimerizável 2 faces": 275,
              "Restauração em Resina Fotopolimerizável 3 faces": 350,
              "Preenchimento de olheiras": 1600,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1970,
              "Coroa Porcelana Pura": 2000,
              "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 500,
              "Aplicação de Selante de Fóssulas e Fissuras": 2800,
              "Placa de mordida miorelaxante": 3000,
              "Tratamento Odontológico": 39350,
              "Exodontia Simples de Permanente": 1250,
              "Exodontia Simples de Decíduo": 2700,
              "Frenulectomia Lingual (Frenectomia)": 600,
              "Aparelho Apneia e Ronco Sound Sleep": 3500,
              "Consulta odontológica": 6153,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4214.5,
              "Radiesse": 2250,
              "Bioestimulador de colágeno": 3700,
              "Aparelho Expansor Hass": 6650,
              "Manutenção de Aparelho Ortodôntico Fixo": 425
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 1250,
                      "Exodontia Simples de Decíduo": 2700,
                      "Frenulectomia Lingual (Frenectomia)": 600
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 100,
                      "Restauração em Resina Fotopolimerizável 2 faces": 275,
                      "Restauração em Resina Fotopolimerizável 3 faces": 350
              },
              "Ortodontia": {
                      "Aparelho Expansor Hass": 6650,
                      "Manutenção de Aparelho Ortodôntico Fixo": 425
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 3000
              },
              "Prevenção": {
                      "Aplicação Tópica de Verniz Fluoretado": 350,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1970,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2800,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4214.5
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 2000
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 500,
                      "Tratamento Odontológico": 39350,
                      "Aparelho Apneia e Ronco Sound Sleep": 3500,
                      "Consulta odontológica": 6153
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4600,
                      "Preenchimento de olheiras": 1600,
                      "Radiesse": 2250,
                      "Bioestimulador de colágeno": 3700
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 3,
      mesNome: 'Março',
      totalVendas: 139650.00,
      totalPorEspecialidade: {
              "Cirurgia": 3100,
              "Dentística": 5150,
              "Endodontia": 1650,
              "Implantodontia": 6000,
              "Ortodontia": 15995,
              "Periodontia": 1500,
              "Prevenção": 8111,
              "Prótese": 42100,
              "Outros": 44652,
              "Harmonização facial": 11392
      },
      totalPorTratamento: {
              "Faceta em Resina Fotopolimerizável": 900,
              "Toxina botulínica (botox)": 7370,
              "Bichectomia": 3150,
              "Restauração em Resina Fotopolimerizável 2 faces": 3900,
              "Escova Elétrica": 510,
              "Preenchimento de olheiras": 872,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3450,
              "Coroa Cerômero": 3400,
              "Coroa Porcelana Pura": 1200,
              "Aplicação de Selante de Fóssulas e Fissuras": 990,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1600,
              "Placa de mordida miorelaxante": 1500,
              "Manutenção Aparelho Ortopédico": 250,
              "Tratamento Odontológico": 34720,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1500,
              "Exérese ou Excisão de Cistos Odontológicos": 350,
              "Exodontia Simples de Decíduo": 1200,
              "Frenulectomia Lingual (Frenectomia)": 1200,
              "Ulectomia": 350,
              "Restauração Atraumática em Dente Decíduo": 350,
              "Tratamento Endodôntico Multirradicular": 1650,
              "Instalação de Implante Ósseo Integrado": 6000,
              "Manutenção Aparelho Expansor": 1120,
              "Expansor MacNamara": 4000,
              "Consulta odontológica": 6832,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 3161,
              "Faceta em Cerâmica Pura": 16500,
              "Aparelho Expansor Hass": 5500,
              "Protocolo Superior e Inferior": 21000,
              "Manutenção de Aparelho Ortodôntico Fixo": 125,
              "Aparelho Autoligado": 5000
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exérese ou Excisão de Cistos Odontológicos": 350,
                      "Exodontia Simples de Decíduo": 1200,
                      "Frenulectomia Lingual (Frenectomia)": 1200,
                      "Ulectomia": 350
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 900,
                      "Restauração em Resina Fotopolimerizável 2 faces": 3900,
                      "Restauração Atraumática em Dente Decíduo": 350
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 1650
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 6000
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 250,
                      "Manutenção Aparelho Expansor": 1120,
                      "Expansor MacNamara": 4000,
                      "Aparelho Expansor Hass": 5500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 125,
                      "Aparelho Autoligado": 5000
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 1500
              },
              "Prevenção": {
                      "Escova Elétrica": 510,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3450,
                      "Aplicação de Selante de Fóssulas e Fissuras": 990,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 3161
              },
              "Prótese": {
                      "Coroa Cerômero": 3400,
                      "Coroa Porcelana Pura": 1200,
                      "Faceta em Cerâmica Pura": 16500,
                      "Protocolo Superior e Inferior": 21000
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1600,
                      "Tratamento Odontológico": 34720,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1500,
                      "Consulta odontológica": 6832
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 7370,
                      "Bichectomia": 3150,
                      "Preenchimento de olheiras": 872
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 4,
      mesNome: 'Abril',
      totalVendas: 51521.00,
      totalPorEspecialidade: {
              "Cirurgia": 2900,
              "Dentística": 3450,
              "Ortodontia": 1225,
              "Periodontia": 600,
              "Prevenção": 10740,
              "Urgência": 350,
              "Outros": 24656,
              "Harmonização facial": 7600
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 4100,
              "Fios de sustentação (espiculado)": 1000,
              "Restauração em Resina Fotopolimerizável 2 faces": 1300,
              "Escova Elétrica": 500,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2700,
              "Aplicação de Selante de Fóssulas e Fissuras": 700,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1260,
              "Placa de mordida miorelaxante": 600,
              "Manutenção Aparelho Ortopédico": 250,
              "Tratamento Odontológico": 19396,
              "Exodontia Simples de Permanente": 100,
              "Exodontia Complexa de Decíduo": 1300,
              "Exodontia Simples de Decíduo": 1150,
              "Frenulectomia Lingual (Frenectomia)": 350,
              "Restauração Atraumática em Dente Decíduo": 700,
              "Restauração em Resina Fotopolimerizável 1 face": 1450,
              "Manutenção Aparelho Expansor": 250,
              "Consulta odontológica": 4000,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6840,
              "Consulta Odontológica de Urgência": 350,
              "Radiesse": 1500,
              "Rinomodelação": 1000,
              "Manutenção de Aparelho Ortodôntico Fixo": 725
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 100,
                      "Exodontia Complexa de Decíduo": 1300,
                      "Exodontia Simples de Decíduo": 1150,
                      "Frenulectomia Lingual (Frenectomia)": 350
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 1300,
                      "Restauração Atraumática em Dente Decíduo": 700,
                      "Restauração em Resina Fotopolimerizável 1 face": 1450
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 250,
                      "Manutenção Aparelho Expansor": 250,
                      "Manutenção de Aparelho Ortodôntico Fixo": 725
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 600
              },
              "Prevenção": {
                      "Escova Elétrica": 500,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2700,
                      "Aplicação de Selante de Fóssulas e Fissuras": 700,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6840
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 350
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1260,
                      "Tratamento Odontológico": 19396,
                      "Consulta odontológica": 4000
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4100,
                      "Fios de sustentação (espiculado)": 1000,
                      "Radiesse": 1500,
                      "Rinomodelação": 1000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 5,
      mesNome: 'Maio',
      totalVendas: 82990.00,
      totalPorEspecialidade: {
              "Cirurgia": 2350,
              "Dentística": 9950,
              "Endodontia": 3800,
              "Ortodontia": 9200,
              "Periodontia": 350,
              "Prevenção": 15540,
              "Prótese": 3100,
              "Outros": 32750,
              "Harmonização facial": 5950
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 5150,
              "Tratamento Endodôntico Unirradicular": 1400,
              "Escova Elétrica": 340,
              "Preenchimento de olheiras": 800,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 800,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4450,
              "Coroa Porcelana Pura": 600,
              "Aplicação de Selante de Fóssulas e Fissuras": 2800,
              "Manutenção Aparelho Ortopédico": 350,
              "Restauração resina dente de leite": 350,
              "Tratamento Odontológico": 29250,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 800,
              "Restauração Onlay em Cerâmica Pura": 2500,
              "Exodontia Simples de Decíduo": 1350,
              "Frenulectomia Lingual (Frenectomia)": 800,
              "Frenulectonia Labial (Frenectomia)": 200,
              "Restauração em Resina Fotopolimerizável 1 face": 4800,
              "Tratamento Endodôntico Multirradicular": 2400,
              "Manutenção Aparelho Expansor": 950,
              "Consulta odontológica": 2700,
              "Raspagem Supra-gengival (RAP) - Limpeza": 350,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7150,
              "Aparelho Ortodôntico Fixo Metálico": 5000,
              "Clareamento Associado": 4800,
              "Manutenção de Aparelho Ortodôntico Fixo": 650,
              "Placa de Haley com torno expansor": 2250
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 1350,
                      "Frenulectomia Lingual (Frenectomia)": 800,
                      "Frenulectonia Labial (Frenectomia)": 200
              },
              "Dentística": {
                      "Restauração resina dente de leite": 350,
                      "Restauração em Resina Fotopolimerizável 1 face": 4800,
                      "Clareamento Associado": 4800
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1400,
                      "Tratamento Endodôntico Multirradicular": 2400
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 350,
                      "Manutenção Aparelho Expansor": 950,
                      "Aparelho Ortodôntico Fixo Metálico": 5000,
                      "Manutenção de Aparelho Ortodôntico Fixo": 650,
                      "Placa de Haley com torno expansor": 2250
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 350
              },
              "Prevenção": {
                      "Escova Elétrica": 340,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 800,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4450,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2800,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7150
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 600,
                      "Restauração Onlay em Cerâmica Pura": 2500
              },
              "Outros": {
                      "Tratamento Odontológico": 29250,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 800,
                      "Consulta odontológica": 2700
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 5150,
                      "Preenchimento de olheiras": 800
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 6,
      mesNome: 'Junho',
      totalVendas: 60790.00,
      totalPorEspecialidade: {
              "Cirurgia": 2900,
              "Dentística": 7944.42,
              "Endodontia": 1500,
              "Ortodontia": 7985,
              "Prevenção": 15795.56,
              "Prótese": 7100.02,
              "Urgência": 350,
              "Outros": 17215
      },
      totalPorTratamento: {
              "Clareamento Dentário Caseiro": 150,
              "Restauração em Resina Fotopolimerizável 2 faces": 5344.42,
              "Tratamento Endodôntico Unirradicular": 600,
              "Escova Elétrica": 170,
              "Tratamento Endodôntico em Dente Decíduo": 900,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 355.56,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2100,
              "Bloco Porcelana Pura": 3400.0200000000004,
              "Coroa Porcelana Pura": 2000,
              "Aplicação de Selante de Fóssulas e Fissuras": 3920,
              "Tratamento Odontológico": 16365,
              "Pino Pré Fabricado": 1700,
              "Terapia a Laser 3 sessões": 950,
              "Exodontia Simples de Decíduo": 400,
              "Frenulectomia Lingual (Frenectomia)": 1300,
              "Frenectomia Lingual Laser Cirurgico": 1200,
              "Restauração em Resina Fotopolimerizável 1 face": 2450,
              "Manutenção Aparelho Expansor": 1650,
              "Consulta odontológica": 850,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8300,
              "Consulta Odontológica de Urgência": 350,
              "Aparelho Expansor Hass": 110,
              "Manutenção de Aparelho Ortodôntico Fixo": 1225,
              "Myobrace": 5000
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 400,
                      "Frenulectomia Lingual (Frenectomia)": 1300,
                      "Frenectomia Lingual Laser Cirurgico": 1200
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 150,
                      "Restauração em Resina Fotopolimerizável 2 faces": 5344.42,
                      "Restauração em Resina Fotopolimerizável 1 face": 2450
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 600,
                      "Tratamento Endodôntico em Dente Decíduo": 900
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 1650,
                      "Aparelho Expansor Hass": 110,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1225,
                      "Myobrace": 5000
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 355.56,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2100,
                      "Aplicação de Selante de Fóssulas e Fissuras": 3920,
                      "Terapia a Laser 3 sessões": 950,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8300
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 3400.0200000000004,
                      "Coroa Porcelana Pura": 2000,
                      "Pino Pré Fabricado": 1700
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 350
              },
              "Outros": {
                      "Tratamento Odontológico": 16365,
                      "Consulta odontológica": 850
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 7,
      mesNome: 'Julho',
      totalVendas: 138120.00,
      totalPorEspecialidade: {
              "Cirurgia": 6650,
              "Dentística": 10145,
              "Endodontia": 1710,
              "Implantodontia": 900,
              "Ortodontia": 11095,
              "Prevenção": 21070,
              "Prótese": 6200,
              "Urgência": 600,
              "Outros": 71850,
              "Harmonização facial": 7900
      },
      totalPorTratamento: {
              "Coroa Provisória sobre Implante": 900,
              "Toxina botulínica (botox)": 6700,
              "Restauração em Resina Fotopolimerizável 2 faces": 4810,
              "Tratamento Endodôntico Unirradicular": 900,
              "Exodontia Siso": 1050,
              "Escova Elétrica": 510,
              "Tratamento Endodôntico em Dente Decíduo": 810,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5700,
              "Coroa Porcelana Pura": 3800,
              "Aplicação de Selante de Fóssulas e Fissuras": 2950,
              "Manutenção Aparelho Ortopédico": 250,
              "Restauração resina dente de leite": 980,
              "Tratamento Odontológico": 66650,
              "Exodontia Simples de Permanente": 1650,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1200,
              "Pino Pré Fabricado": 2400,
              "Colagem de Fragmentos Dentários": 600,
              "Exodontia Simples de Decíduo": 1320,
              "Frenulectomia Lingual (Frenectomia)": 350,
              "Frenectomia Lingual Laser Cirurgico": 2280,
              "Núcleo de Preenchimento": 600,
              "Restauração em Resina Fotopolimerizável 1 face": 2405,
              "Sessão Clareamento em Consultório": 1350,
              "Manutenção Aparelho Expansor": 1670,
              "Aparelho Apneia e Ronco Sound Sleep": 1500,
              "Consulta odontológica": 2500,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 11850,
              "Refil Escova Elétrica": 60,
              "Rinomodelação": 1200,
              "Aparelho Expansor Hyrax": 4750,
              "Manutenção de Aparelho Ortodôntico Fixo": 925,
              "Aparelho Autoligado": 3500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 1050,
                      "Exodontia Simples de Permanente": 1650,
                      "Exodontia Simples de Decíduo": 1320,
                      "Frenulectomia Lingual (Frenectomia)": 350,
                      "Frenectomia Lingual Laser Cirurgico": 2280
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 4810,
                      "Restauração resina dente de leite": 980,
                      "Núcleo de Preenchimento": 600,
                      "Restauração em Resina Fotopolimerizável 1 face": 2405,
                      "Sessão Clareamento em Consultório": 1350
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 900,
                      "Tratamento Endodôntico em Dente Decíduo": 810
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 900
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 250,
                      "Manutenção Aparelho Expansor": 1670,
                      "Aparelho Expansor Hyrax": 4750,
                      "Manutenção de Aparelho Ortodôntico Fixo": 925,
                      "Aparelho Autoligado": 3500
              },
              "Prevenção": {
                      "Escova Elétrica": 510,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5700,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2950,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 11850,
                      "Refil Escova Elétrica": 60
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 3800,
                      "Pino Pré Fabricado": 2400
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 600
              },
              "Outros": {
                      "Tratamento Odontológico": 66650,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1200,
                      "Aparelho Apneia e Ronco Sound Sleep": 1500,
                      "Consulta odontológica": 2500
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 6700,
                      "Rinomodelação": 1200
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 8,
      mesNome: 'Agosto',
      totalVendas: 83224.00,
      totalPorEspecialidade: {
              "Cirurgia": 2580,
              "Dentística": 3000,
              "Ortodontia": 6280,
              "Periodontia": 1500,
              "Prevenção": 14450,
              "Prótese": 5160,
              "Urgência": 350,
              "Outros": 47204,
              "Harmonização facial": 2700
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 1000,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3100,
              "Coroa Porcelana Pura": 5160,
              "Aplicação de Selante de Fóssulas e Fissuras": 2800,
              "Placa de mordida miorelaxante": 1500,
              "Tratamento Odontológico": 45504,
              "Exodontia Simples de Permanente": 350,
              "Exodontia Complexa de Decíduo": 900,
              "Exodontia Simples de Decíduo": 250,
              "Frenectomia Lingual Laser Cirurgico": 1080,
              "Restauração Atraumática em Dente Decíduo": 350,
              "Restauração em Resina Fotopolimerizável 1 face": 2650,
              "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 3500,
              "Manutenção Aparelho Expansor": 780,
              "Consulta Inicial": 150,
              "Consulta odontológica": 1200,
              "Oxido Nitroso": 350,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8550,
              "Consulta Odontológica de Urgência": 350,
              "Bioestimulador Radiesse": 1700,
              "Aparelho Expansor Hass": 1500,
              "Manutenção de Aparelho Ortodôntico Fixo": 500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 350,
                      "Exodontia Complexa de Decíduo": 900,
                      "Exodontia Simples de Decíduo": 250,
                      "Frenectomia Lingual Laser Cirurgico": 1080
              },
              "Dentística": {
                      "Restauração Atraumática em Dente Decíduo": 350,
                      "Restauração em Resina Fotopolimerizável 1 face": 2650
              },
              "Ortodontia": {
                      "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 3500,
                      "Manutenção Aparelho Expansor": 780,
                      "Aparelho Expansor Hass": 1500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 500
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 1500
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3100,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2800,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8550
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 5160
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 350
              },
              "Outros": {
                      "Tratamento Odontológico": 45504,
                      "Consulta Inicial": 150,
                      "Consulta odontológica": 1200,
                      "Oxido Nitroso": 350
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 1000,
                      "Bioestimulador Radiesse": 1700
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 9,
      mesNome: 'Setembro',
      totalVendas: 118487.50,
      totalPorEspecialidade: {
              "Cirurgia": 4890,
              "Dentística": 7600,
              "Endodontia": 5400,
              "Implantodontia": 8000,
              "Ortodontia": 5255,
              "Periodontia": 600,
              "Prevenção": 13105,
              "Prótese": 2400,
              "Urgência": 1925,
              "Outros": 37817.5,
              "Harmonização facial": 31495
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 14000,
              "Clareamento Dentário Caseiro": 950,
              "Restauração em Resina Fotopolimerizável 2 faces": 1950,
              "Tratamento Endodôntico Unirradicular": 900,
              "Escova Elétrica": 340,
              "Tratamento Endodôntico em Dente Decíduo": 2700,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2400,
              "Coroa Porcelana Pura": 1500,
              "Aplicação de Selante de Fóssulas e Fissuras": 4325,
              "Tratamento Odontológico": 35107.5,
              "Exodontia Simples de Permanente": 450,
              "Contenção Fixa": 1500,
              "Pino Pré Fabricado": 900,
              "Harmonização Facial": 12000,
              "Exodontia Simples de Decíduo": 1050,
              "Frenulectomia Lingual (Frenectomia)": 350,
              "Núcleo de Preenchimento": 600,
              "Restauração em Resina Fotopolimerizável 1 face": 3500,
              "Sessão Clareamento em Consultório": 600,
              "Tratamento Endodôntico Multirradicular": 1800,
              "Prótese total removível implanto suportada": 8000,
              "Manutenção Aparelho Expansor": 2255,
              "Placa de Hawlay Superior": 1200,
              "Consulta odontológica": 1060,
              "Oxido Nitroso": 1650,
              "Raspagem Supra-gengival (RAP) - Limpeza": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5920,
              "Refil Escova Elétrica": 120,
              "Consulta Odontológica de Urgência": 1925,
              "Preenchimento de malar": 3200,
              "Bioestimulador Radiesse": 1800,
              "Microagulhamento": 495,
              "Frenectomia lingual a laser com sedação de óxido nitroso": 3040,
              "Manutenção de Aparelho Ortodôntico Fixo": 300
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 450,
                      "Exodontia Simples de Decíduo": 1050,
                      "Frenulectomia Lingual (Frenectomia)": 350,
                      "Frenectomia lingual a laser com sedação de óxido nitroso": 3040
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 950,
                      "Restauração em Resina Fotopolimerizável 2 faces": 1950,
                      "Núcleo de Preenchimento": 600,
                      "Restauração em Resina Fotopolimerizável 1 face": 3500,
                      "Sessão Clareamento em Consultório": 600
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 900,
                      "Tratamento Endodôntico em Dente Decíduo": 2700,
                      "Tratamento Endodôntico Multirradicular": 1800
              },
              "Implantodontia": {
                      "Prótese total removível implanto suportada": 8000
              },
              "Ortodontia": {
                      "Contenção Fixa": 1500,
                      "Manutenção Aparelho Expansor": 2255,
                      "Placa de Hawlay Superior": 1200,
                      "Manutenção de Aparelho Ortodôntico Fixo": 300
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 600
              },
              "Prevenção": {
                      "Escova Elétrica": 340,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2400,
                      "Aplicação de Selante de Fóssulas e Fissuras": 4325,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5920,
                      "Refil Escova Elétrica": 120
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 1500,
                      "Pino Pré Fabricado": 900
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 1925
              },
              "Outros": {
                      "Tratamento Odontológico": 35107.5,
                      "Consulta odontológica": 1060,
                      "Oxido Nitroso": 1650
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 14000,
                      "Harmonização Facial": 12000,
                      "Preenchimento de malar": 3200,
                      "Bioestimulador Radiesse": 1800,
                      "Microagulhamento": 495
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 10,
      mesNome: 'Outubro',
      totalVendas: 127205.00,
      totalPorEspecialidade: {
              "Cirurgia": 4325,
              "Dentística": 13397.5,
              "Endodontia": 2800,
              "Ortodontia": 6775,
              "Periodontia": 1450,
              "Prevenção": 12980,
              "Prótese": 2000,
              "Urgência": 700,
              "Outros": 59647.5,
              "Harmonização facial": 23130
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 11700,
              "Clareamento em Consultório": 1000,
              "Fios de sustentação (espiculado)": 3000,
              "Restauração em Resina Fotopolimerizável 2 faces": 6272.5,
              "Escova Elétrica": 170,
              "Tratamento Endodôntico em Dente Decíduo": 100,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2600,
              "Coroa Porcelana Pura": 2000,
              "Aplicação de Selante de Fóssulas e Fissuras": 3010,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 2600,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 2930,
              "Restauração resina dente de leite": 450,
              "Tratamento Odontológico": 51287.5,
              "Exodontia Complexa de Decíduo": 600,
              "Terapia a Laser 3 sessões": 350,
              "Exodontia Simples de Decíduo": 925,
              "Frenectomia Lingual Laser Cirurgico": 1200,
              "Restauração em Resina Fotopolimerizável 1 face": 5675,
              "Tratamento Endodôntico Multirradicular": 2700,
              "Manutenção Aparelho Expansor": 2175,
              "Consulta de Retorno": 350,
              "Consulta odontológica": 1365,
              "Lipo Enzimática de Papada - 1 Sessão": 450,
              "Oxido Nitroso": 665,
              "Raspagem Sub-gengival (RASUB)": 800,
              "Raspagem Supra-gengival (RAP) - Limpeza": 650,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6790,
              "Refil Escova Elétrica": 60,
              "Consulta Odontológica de Urgência": 700,
              "Skinbooster": 1200,
              "Preenchimento de malar": 4730,
              "Bioestimulador Radiesse": 2500,
              "Frenectomia lingual a laser com sedação de óxido nitroso": 1600,
              "Aparelho Expansor Hass": 2500,
              "Manutenção de Aparelho Ortodôntico Fixo": 2100
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Complexa de Decíduo": 600,
                      "Exodontia Simples de Decíduo": 925,
                      "Frenectomia Lingual Laser Cirurgico": 1200,
                      "Frenectomia lingual a laser com sedação de óxido nitroso": 1600
              },
              "Dentística": {
                      "Clareamento em Consultório": 1000,
                      "Restauração em Resina Fotopolimerizável 2 faces": 6272.5,
                      "Restauração resina dente de leite": 450,
                      "Restauração em Resina Fotopolimerizável 1 face": 5675
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 100,
                      "Tratamento Endodôntico Multirradicular": 2700
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 2175,
                      "Aparelho Expansor Hass": 2500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 2100
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 800,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 650
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2600,
                      "Aplicação de Selante de Fóssulas e Fissuras": 3010,
                      "Terapia a Laser 3 sessões": 350,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6790,
                      "Refil Escova Elétrica": 60
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 2000
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 700
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 2600,
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 2930,
                      "Tratamento Odontológico": 51287.5,
                      "Consulta de Retorno": 350,
                      "Consulta odontológica": 1365,
                      "Lipo Enzimática de Papada - 1 Sessão": 450,
                      "Oxido Nitroso": 665
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 11700,
                      "Fios de sustentação (espiculado)": 3000,
                      "Skinbooster": 1200,
                      "Preenchimento de malar": 4730,
                      "Bioestimulador Radiesse": 2500
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 11,
      mesNome: 'Novembro',
      totalVendas: 81319.50,
      totalPorEspecialidade: {
              "Cirurgia": 2880,
              "Dentística": 14787,
              "Endodontia": 5137.5,
              "Implantodontia": 2700,
              "Ortodontia": 5300,
              "Periodontia": 2150,
              "Prevenção": 9080,
              "Prótese": 900,
              "Urgência": 600,
              "Outros": 26535,
              "Harmonização facial": 11250
      },
      totalPorTratamento: {
              "Faceta em Resina Fotopolimerizável": 11337,
              "Coroa Provisória sobre Implante": 1200,
              "Toxina botulínica (botox)": 6050,
              "Fios de sustentação (espiculado)": 2000,
              "Restauração em Resina Fotopolimerizável 2 faces": 2600,
              "Escova Elétrica": 340,
              "Preenchimento de olheiras": 1600,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2400,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 2 Seringas": 3600,
              "Aplicação de Selante de Fóssulas e Fissuras": 1400,
              "Placa de mordida miorelaxante": 1350,
              "Tratamento Odontológico": 18970,
              "Curativo de Demora": 637.5,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1600,
              "Exodontia Simples de Decíduo": 950,
              "Frenectomia Lingual Laser Cirurgico": 850,
              "Restauração em Resina Fotopolimerizável 1 face": 550,
              "Sessão Clareamento em Consultório": 300,
              "Tratamento Endodôntico Multirradicular": 4500,
              "Instalação de Implante Ósseo Integrado": 1500,
              "Manutenção Aparelho Expansor": 1300,
              "Consulta odontológica": 1350,
              "Oxido Nitroso": 1015,
              "Raspagem Sub-gengival (RASUB)": 800,
              "Consulta de Avaliação": 350,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4550,
              "Refil Escova Elétrica": 40,
              "Bloco Cerômero": 900,
              "Consulta Odontológica de Urgência": 600,
              "Preenchimento de mento": 1600,
              "Frenectomia Labial Laser Cirurgico": 1080,
              "Aparelho Expansor Hass": 2500,
              "Manutenção de Aparelho Ortodôntico Fixo": 1500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 950,
                      "Frenectomia Lingual Laser Cirurgico": 850,
                      "Frenectomia Labial Laser Cirurgico": 1080
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 11337,
                      "Restauração em Resina Fotopolimerizável 2 faces": 2600,
                      "Restauração em Resina Fotopolimerizável 1 face": 550,
                      "Sessão Clareamento em Consultório": 300
              },
              "Endodontia": {
                      "Curativo de Demora": 637.5,
                      "Tratamento Endodôntico Multirradicular": 4500
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 1200,
                      "Instalação de Implante Ósseo Integrado": 1500
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 1300,
                      "Aparelho Expansor Hass": 2500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1500
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 1350,
                      "Raspagem Sub-gengival (RASUB)": 800
              },
              "Prevenção": {
                      "Escova Elétrica": 340,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2400,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1400,
                      "Consulta de Avaliação": 350,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4550,
                      "Refil Escova Elétrica": 40
              },
              "Prótese": {
                      "Bloco Cerômero": 900
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 2 Seringas": 3600,
                      "Tratamento Odontológico": 18970,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1600,
                      "Consulta odontológica": 1350,
                      "Oxido Nitroso": 1015
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 6050,
                      "Fios de sustentação (espiculado)": 2000,
                      "Preenchimento de olheiras": 1600,
                      "Preenchimento de mento": 1600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2021,
      mes: 12,
      mesNome: 'Dezembro',
      totalVendas: 56295.00,
      totalPorEspecialidade: {
              "Cirurgia": 3800,
              "Dentística": 5590,
              "Endodontia": 2300,
              "Implantodontia": 800,
              "Ortodontia": 5505,
              "Periodontia": 600,
              "Prevenção": 11915,
              "Prótese": 2450,
              "Urgência": 700,
              "Outros": 9035,
              "Harmonização facial": 13600
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 3800,
              "Clareamento Dentário Caseiro": 150,
              "Fios de sustentação (espiculado)": 1800,
              "Restauração em Resina Fotopolimerizável 2 faces": 2670,
              "Restauração em Resina Fotopolimerizável 3 faces": 640,
              "Exodontia Siso": 900,
              "Escova Elétrica": 170,
              "Tratamento Endodôntico em Dente Decíduo": 900,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 680,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5330,
              "Coroa Porcelana Pura": 1250,
              "Tratamento Odontológico": 7985,
              "Exodontia com Retalho": 1250,
              "Harmonização Facial": 7200,
              "Exodontia Simples de Decíduo": 1650,
              "Restauração em Resina Fotopolimerizável 1 face": 2130,
              "Tratamento Endodôntico Birradicular": 1400,
              "Instalação de Implante Ósseo Integrado": 800,
              "Manutenção Aparelho Expansor": 880,
              "Consulta odontológica": 1050,
              "Cunha Proximal": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5615,
              "Refil Escova Elétrica": 120,
              "Provisório para Faceta": 600,
              "Provisório para Inlay/Onlay": 600,
              "Consulta Odontológica de Urgência": 700,
              "Preenchimento de malar": 800,
              "Manutenção de Aparelho Ortodôntico Fixo": 1125,
              "Aparelho Autoligado": 3500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 900,
                      "Exodontia com Retalho": 1250,
                      "Exodontia Simples de Decíduo": 1650
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 150,
                      "Restauração em Resina Fotopolimerizável 2 faces": 2670,
                      "Restauração em Resina Fotopolimerizável 3 faces": 640,
                      "Restauração em Resina Fotopolimerizável 1 face": 2130
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 900,
                      "Tratamento Endodôntico Birradicular": 1400
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 800
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 880,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1125,
                      "Aparelho Autoligado": 3500
              },
              "Periodontia": {
                      "Cunha Proximal": 600
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 680,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5330,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5615,
                      "Refil Escova Elétrica": 120
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 1250,
                      "Provisório para Faceta": 600,
                      "Provisório para Inlay/Onlay": 600
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 700
              },
              "Outros": {
                      "Tratamento Odontológico": 7985,
                      "Consulta odontológica": 1050
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3800,
                      "Fios de sustentação (espiculado)": 1800,
                      "Harmonização Facial": 7200,
                      "Preenchimento de malar": 800
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 1,
      mesNome: 'Janeiro',
      totalVendas: 86815.00,
      totalPorEspecialidade: {
              "Cirurgia": 1760,
              "Dentística": 7050,
              "Endodontia": 1080,
              "Implantodontia": 10000,
              "Ortodontia": 1450,
              "Prevenção": 14577,
              "Urgência": 600,
              "Outros": 47918,
              "Harmonização facial": 2380
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 1120,
              "Restauração em Resina Fotopolimerizável 2 faces": 5200,
              "Exodontia Siso": 810,
              "Escova Elétrica": 663,
              "Tratamento Endodôntico em Dente Decíduo": 1080,
              "Preenchimento de olheiras": 1260,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 720,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1850,
              "Aplicação de Selante de Fóssulas e Fissuras": 1150,
              "Tratamento Odontológico": 43118,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 800,
              "Exodontia Simples de Decíduo": 950,
              "Restauração em Resina Fotopolimerizável 1 face": 1850,
              "Prótese total removível implanto suportada": 10000,
              "Manutenção Aparelho Expansor": 600,
              "Consulta odontológica": 3650,
              "Oxido Nitroso": 350,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 10019,
              "Refil Escova Elétrica": 175,
              "Consulta Odontológica de Urgência": 600,
              "Manutenção de Aparelho Ortodôntico Fixo": 850
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 810,
                      "Exodontia Simples de Decíduo": 950
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 5200,
                      "Restauração em Resina Fotopolimerizável 1 face": 1850
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1080
              },
              "Implantodontia": {
                      "Prótese total removível implanto suportada": 10000
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 600,
                      "Manutenção de Aparelho Ortodôntico Fixo": 850
              },
              "Prevenção": {
                      "Escova Elétrica": 663,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 720,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1850,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1150,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 10019,
                      "Refil Escova Elétrica": 175
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Tratamento Odontológico": 43118,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 800,
                      "Consulta odontológica": 3650,
                      "Oxido Nitroso": 350
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 1120,
                      "Preenchimento de olheiras": 1260
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 2,
      mesNome: 'Fevereiro',
      totalVendas: 141180.50,
      totalPorEspecialidade: {
              "Cirurgia": 3650,
              "Dentística": 7150,
              "Endodontia": 3300,
              "Implantodontia": 1200,
              "Ortodontia": 14505,
              "Periodontia": 3850,
              "Prevenção": 20032.5,
              "Prótese": 20450,
              "Urgência": 380,
              "Outros": 60833,
              "Harmonização facial": 5830
      },
      totalPorTratamento: {
              "Implante Ortodôntico": 1200,
              "Toxina botulínica (botox)": 4230,
              "Clareamento Dentário Caseiro": 1200,
              "Clareamento em Consultório": 1600,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1700,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5537.5,
              "Coroa Porcelana Pura": 2150,
              "Aplicação de Selante de Fóssulas e Fissuras": 1400,
              "Placa de mordida miorelaxante": 3200,
              "Tratamento Odontológico": 58383,
              "Curativo de Demora": 900,
              "Reabilitação": 17000,
              "Pino Pré Fabricado": 900,
              "Colagem de Fragmentos Dentários": 380,
              "Exodontia Simples de Decíduo": 2450,
              "Frenectomia Lingual Laser Cirurgico": 1200,
              "Restauração em Resina Fotopolimerizável 1 face": 4350,
              "Pulpotomia": 1200,
              "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 2750,
              "Manutenção Aparelho Expansor": 430,
              "Expansor MacNamara": 5000,
              "Consulta odontológica": 1550,
              "Oxido Nitroso": 900,
              "Raspagem Supra-gengival (RAP) - Limpeza": 650,
              "Consulta de Avaliação": 350,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 10915,
              "Refil Escova Elétrica": 130,
              "Provisório para Inlay/Onlay": 400,
              "Preenchimento de mento": 1600,
              "Aparelho Ortopédico Expansor Maxilar": 2500,
              "Aparelho Ortopédico Expansor Mandibular": 2500,
              "Manutenção de Aparelho Ortodôntico Fixo": 1325
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 2450,
                      "Frenectomia Lingual Laser Cirurgico": 1200
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 1200,
                      "Clareamento em Consultório": 1600,
                      "Restauração em Resina Fotopolimerizável 1 face": 4350
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Curativo de Demora": 900,
                      "Pulpotomia": 1200
              },
              "Implantodontia": {
                      "Implante Ortodôntico": 1200
              },
              "Ortodontia": {
                      "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 2750,
                      "Manutenção Aparelho Expansor": 430,
                      "Expansor MacNamara": 5000,
                      "Aparelho Ortopédico Expansor Maxilar": 2500,
                      "Aparelho Ortopédico Expansor Mandibular": 2500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1325
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 3200,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 650
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1700,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5537.5,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1400,
                      "Consulta de Avaliação": 350,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 10915,
                      "Refil Escova Elétrica": 130
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 2150,
                      "Reabilitação": 17000,
                      "Pino Pré Fabricado": 900,
                      "Provisório para Inlay/Onlay": 400
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 380
              },
              "Outros": {
                      "Tratamento Odontológico": 58383,
                      "Consulta odontológica": 1550,
                      "Oxido Nitroso": 900
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4230,
                      "Preenchimento de mento": 1600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 3,
      mesNome: 'Março',
      totalVendas: 144585.00,
      totalPorEspecialidade: {
              "Cirurgia": 5800,
              "Dentística": 6305,
              "Endodontia": 3700,
              "Ortodontia": 12580,
              "Periodontia": 3200,
              "Prevenção": 28612.5,
              "Prótese": 5300,
              "Outros": 56837.5,
              "Harmonização facial": 22250
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 3000,
              "Fios de sustentação (espiculado)": 2700,
              "Restauração em Resina Fotopolimerizável 2 faces": 3600,
              "Restauração em Resina Fotopolimerizável 4 faces": 950,
              "Escova Elétrica": 340,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Preenchimento de sulco labiomentoniano (marionete)": 1800,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5142.5,
              "Aplicação de Selante de Fóssulas e Fissuras": 8650,
              "Placa de mordida miorelaxante": 3200,
              "Manutenção Aparelho Ortopédico": 350,
              "Tratamento Odontológico": 53212.5,
              "Pino Pré Fabricado": 900,
              "Coroa Sobre Implante de Zirconia": 4000,
              "Terapia a Laser 3 sessões": 300,
              "Harmonização Facial": 8100,
              "Exodontia de Dentes Inclusos / Impactados": 1200,
              "Exodontia Simples de Decíduo": 900,
              "Frenectomia Lingual Laser Cirurgico": 3700,
              "Restauração em Resina Fotopolimerizável 1 face": 1755,
              "Tratamento Endodôntico Multirradicular": 2500,
              "Manutenção Aparelho Expansor": 1480,
              "Consulta odontológica": 2550,
              "Oxido Nitroso": 1075,
              "Consulta de Avaliação": 300,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 13790,
              "Refil Escova Elétrica": 90,
              "Provisório para Inlay/Onlay": 400,
              "Fios de PDO liso": 500,
              "Preenchimento de malar": 3950,
              "Preenchimento labial": 2200,
              "Aparelho Ortopédico Expansor Mandibular": 4300,
              "Aparelho Expansor Hyrax": 2800,
              "Manutenção de Aparelho Ortodôntico Fixo": 850,
              "Placa Labio-ativa (Lip bumper)": 2800
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia de Dentes Inclusos / Impactados": 1200,
                      "Exodontia Simples de Decíduo": 900,
                      "Frenectomia Lingual Laser Cirurgico": 3700
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 3600,
                      "Restauração em Resina Fotopolimerizável 4 faces": 950,
                      "Restauração em Resina Fotopolimerizável 1 face": 1755
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Tratamento Endodôntico Multirradicular": 2500
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 350,
                      "Manutenção Aparelho Expansor": 1480,
                      "Aparelho Ortopédico Expansor Mandibular": 4300,
                      "Aparelho Expansor Hyrax": 2800,
                      "Manutenção de Aparelho Ortodôntico Fixo": 850,
                      "Placa Labio-ativa (Lip bumper)": 2800
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 3200
              },
              "Prevenção": {
                      "Escova Elétrica": 340,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5142.5,
                      "Aplicação de Selante de Fóssulas e Fissuras": 8650,
                      "Terapia a Laser 3 sessões": 300,
                      "Consulta de Avaliação": 300,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 13790,
                      "Refil Escova Elétrica": 90
              },
              "Prótese": {
                      "Pino Pré Fabricado": 900,
                      "Coroa Sobre Implante de Zirconia": 4000,
                      "Provisório para Inlay/Onlay": 400
              },
              "Outros": {
                      "Tratamento Odontológico": 53212.5,
                      "Consulta odontológica": 2550,
                      "Oxido Nitroso": 1075
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3000,
                      "Fios de sustentação (espiculado)": 2700,
                      "Preenchimento de sulco labiomentoniano (marionete)": 1800,
                      "Harmonização Facial": 8100,
                      "Fios de PDO liso": 500,
                      "Preenchimento de malar": 3950,
                      "Preenchimento labial": 2200
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 4,
      mesNome: 'Abril',
      totalVendas: 54692.50,
      totalPorEspecialidade: {
              "Cirurgia": 3950,
              "Dentística": 4145,
              "Ortodontia": 7950,
              "Periodontia": 3537.5,
              "Prevenção": 15410,
              "Prótese": 1600,
              "Urgência": 1700,
              "Outros": 7000,
              "Harmonização facial": 9400
      },
      totalPorTratamento: {
              "Aplicação Tópica de Verniz Fluoretado": 1440,
              "Toxina botulínica (botox)": 1600,
              "Restauração em Resina Fotopolimerizável 2 faces": 400,
              "Escova Elétrica": 170,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2500,
              "Aplicação de Selante de Fóssulas e Fissuras": 1220,
              "Placa de mordida miorelaxante": 2270,
              "Restauração resina dente de leite": 450,
              "Tratamento Odontológico": 4300,
              "Exodontia Simples de Permanente": 300,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1200,
              "Harmonização Facial": 6000,
              "Exodontia Simples de Decíduo": 850,
              "Frenectomia Lingual Laser Cirurgico": 1600,
              "Restauração em Resina Fotopolimerizável 1 face": 795,
              "Consulta odontológica": 800,
              "Oxido Nitroso": 700,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1267.5,
              "Consulta de Avaliação": 400,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 9680,
              "Provisório para Inlay/Onlay": 1600,
              "Consulta Odontológica de Urgência": 1700,
              "Rinomodelação": 1800,
              "Aparelho Ortopédico Expansor Maxilar": 4900,
              "Aparelho Ortopédico Expansor Mandibular": 2100,
              "Frenectomia Labial Laser Cirurgico": 1200,
              "Clareamento Associado": 2500,
              "Manutenção de Aparelho Ortodôntico Fixo": 950
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 300,
                      "Exodontia Simples de Decíduo": 850,
                      "Frenectomia Lingual Laser Cirurgico": 1600,
                      "Frenectomia Labial Laser Cirurgico": 1200
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 400,
                      "Restauração resina dente de leite": 450,
                      "Restauração em Resina Fotopolimerizável 1 face": 795,
                      "Clareamento Associado": 2500
              },
              "Ortodontia": {
                      "Aparelho Ortopédico Expansor Maxilar": 4900,
                      "Aparelho Ortopédico Expansor Mandibular": 2100,
                      "Manutenção de Aparelho Ortodôntico Fixo": 950
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 2270,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1267.5
              },
              "Prevenção": {
                      "Aplicação Tópica de Verniz Fluoretado": 1440,
                      "Escova Elétrica": 170,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2500,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1220,
                      "Consulta de Avaliação": 400,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 9680
              },
              "Prótese": {
                      "Provisório para Inlay/Onlay": 1600
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 1700
              },
              "Outros": {
                      "Tratamento Odontológico": 4300,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1200,
                      "Consulta odontológica": 800,
                      "Oxido Nitroso": 700
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 1600,
                      "Harmonização Facial": 6000,
                      "Rinomodelação": 1800
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 5,
      mesNome: 'Maio',
      totalVendas: 101600.00,
      totalPorEspecialidade: {
              "Cirurgia": 4175,
              "Dentística": 9292.5,
              "Endodontia": 3900,
              "Ortodontia": 3250,
              "Periodontia": 5970,
              "Prevenção": 27595,
              "Prótese": 6400,
              "Urgência": 650,
              "Outros": 17217.5,
              "Harmonização facial": 23150
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 9200,
              "Limpeza e Manutenção da Prótese Protocolo": 1200,
              "Clareamento Dentário Caseiro": 400,
              "Gengivoplastia": 2520,
              "Restauração em Resina Fotopolimerizável 2 faces": 3375,
              "Restauração em Resina Fotopolimerizável 4 faces": 712.5,
              "Exodontia Siso": 800,
              "Escova Elétrica": 170,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 850,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5050,
              "Bloco Porcelana Pura": 2500,
              "Prótese Fixa Adesiva em Cerômero (metal free)": 1800,
              "Aplicação de Selante de Fóssulas e Fissuras": 6700,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1700,
              "Tratamento Odontológico": 11167.5,
              "Curativo de Demora": 450,
              "Contenção Fixa": 400,
              "Pino Pré Fabricado": 900,
              "Harmonização Facial": 5550,
              "Biópsia de Boca": 600,
              "Exodontia Simples de Decíduo": 1575,
              "Restauração em Resina Fotopolimerizável 1 face": 1405,
              "Sessão Clareamento em Consultório": 600,
              "Remoção de Núcleo Intra-Radicular": 450,
              "Tratamento Endodôntico Birradicular": 1800,
              "Manutenção Aparelho Expansor": 1350,
              "Consulta odontológica": 1750,
              "Oxido Nitroso": 2600,
              "Raspagem Sub-gengival (RASUB)": 2550,
              "Raspagem Supra-gengival (RAP) - Limpeza": 900,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 14510,
              "Refil Escova Elétrica": 315,
              "Consulta Odontológica de Urgência": 650,
              "Bioestimulador Radiesse": 8400,
              "Frenectomia Labial Laser Cirurgico": 1200,
              "Clareamento Associado": 2800,
              "Manutenção de Aparelho Ortodôntico Fixo": 1500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 800,
                      "Biópsia de Boca": 600,
                      "Exodontia Simples de Decíduo": 1575,
                      "Frenectomia Labial Laser Cirurgico": 1200
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 400,
                      "Restauração em Resina Fotopolimerizável 2 faces": 3375,
                      "Restauração em Resina Fotopolimerizável 4 faces": 712.5,
                      "Restauração em Resina Fotopolimerizável 1 face": 1405,
                      "Sessão Clareamento em Consultório": 600,
                      "Clareamento Associado": 2800
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Curativo de Demora": 450,
                      "Remoção de Núcleo Intra-Radicular": 450,
                      "Tratamento Endodôntico Birradicular": 1800
              },
              "Ortodontia": {
                      "Contenção Fixa": 400,
                      "Manutenção Aparelho Expansor": 1350,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1500
              },
              "Periodontia": {
                      "Gengivoplastia": 2520,
                      "Raspagem Sub-gengival (RASUB)": 2550,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 900
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 850,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5050,
                      "Aplicação de Selante de Fóssulas e Fissuras": 6700,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 14510,
                      "Refil Escova Elétrica": 315
              },
              "Prótese": {
                      "Limpeza e Manutenção da Prótese Protocolo": 1200,
                      "Bloco Porcelana Pura": 2500,
                      "Prótese Fixa Adesiva em Cerômero (metal free)": 1800,
                      "Pino Pré Fabricado": 900
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 650
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1700,
                      "Tratamento Odontológico": 11167.5,
                      "Consulta odontológica": 1750,
                      "Oxido Nitroso": 2600
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 9200,
                      "Harmonização Facial": 5550,
                      "Bioestimulador Radiesse": 8400
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 6,
      mesNome: 'Junho',
      totalVendas: 71101.66,
      totalPorEspecialidade: {
              "Cirurgia": 3600,
              "Dentística": 7750,
              "Endodontia": 3000,
              "Implantodontia": 5200,
              "Ortodontia": 12045,
              "Periodontia": 4007.5,
              "Prevenção": 13690.84,
              "Prótese": 7000,
              "Urgência": 1050,
              "Outros": 3200,
              "Harmonização facial": 10558.32
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 6185,
              "Clareamento em Consultório": 800,
              "Restauração em Resina Fotopolimerizável 2 faces": 750,
              "Tratamento Endodôntico Unirradicular": 1400,
              "Escova Elétrica": 510,
              "Tratamento Endodôntico em Dente Decíduo": 1600,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 850,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4285.84,
              "Bloco Porcelana Pura": 5000,
              "Aplicação de Selante de Fóssulas e Fissuras": 1200,
              "Manutenção Aparelho Ortopédico": 180,
              "Restauração resina dente de leite": 900,
              "Tratamento Odontológico": 2840,
              "Aparelho Fixo Estético Porcelana": 1800,
              "Colagem de Fragmentos Dentários": 450,
              "Exodontia Simples de Decíduo": 2000,
              "Ulectomia": 400,
              "Frenectomia Lingual Laser Cirurgico": 1200,
              "Restauração em Resina Fotopolimerizável 1 face": 2500,
              "Instalação de Implante Ósseo Integrado": 5200,
              "Manutenção Aparelho Expansor": 1190,
              "Consulta odontológica": 360,
              "Raspagem Sub-gengival (RASUB)": 3357.5,
              "Raspagem Supra-gengival (RAP) - Limpeza": 650,
              "Consulta de Avaliação": 400,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5750,
              "Refil Escova Elétrica": 45,
              "Consulta Odontológica de Urgência": 600,
              "Placa de Bruxismo Infantil": 650,
              "Preenchimento de mento": 266.66,
              "Preenchimento de mandíbula": 266.67,
              "Preenchimento labial": 1200,
              "Bioestimulador Radiesse": 2340,
              "Rinomodelação": 299.99,
              "Coroa Total Pré-Fabricado de Zircônia": 2000,
              "Aparelho Ortopédico Expansor Maxilar": 3600,
              "Aparelho Ortopédico Expansor Mandibular": 3600,
              "Clareamento Associado": 2800,
              "Manutenção de Aparelho Ortodôntico Fixo": 1675
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 2000,
                      "Ulectomia": 400,
                      "Frenectomia Lingual Laser Cirurgico": 1200
              },
              "Dentística": {
                      "Clareamento em Consultório": 800,
                      "Restauração em Resina Fotopolimerizável 2 faces": 750,
                      "Restauração resina dente de leite": 900,
                      "Restauração em Resina Fotopolimerizável 1 face": 2500,
                      "Clareamento Associado": 2800
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1400,
                      "Tratamento Endodôntico em Dente Decíduo": 1600
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 5200
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 180,
                      "Aparelho Fixo Estético Porcelana": 1800,
                      "Manutenção Aparelho Expansor": 1190,
                      "Aparelho Ortopédico Expansor Maxilar": 3600,
                      "Aparelho Ortopédico Expansor Mandibular": 3600,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1675
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 3357.5,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 650
              },
              "Prevenção": {
                      "Escova Elétrica": 510,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 850,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4285.84,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1200,
                      "Consulta de Avaliação": 400,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5750,
                      "Refil Escova Elétrica": 45,
                      "Placa de Bruxismo Infantil": 650
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 5000,
                      "Coroa Total Pré-Fabricado de Zircônia": 2000
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 450,
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Tratamento Odontológico": 2840,
                      "Consulta odontológica": 360
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 6185,
                      "Preenchimento de mento": 266.66,
                      "Preenchimento de mandíbula": 266.67,
                      "Preenchimento labial": 1200,
                      "Bioestimulador Radiesse": 2340,
                      "Rinomodelação": 299.99
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 7,
      mesNome: 'Julho',
      totalVendas: 144495.52,
      totalPorEspecialidade: {
              "Cirurgia": 9852.5,
              "Dentística": 10285,
              "Endodontia": 1200,
              "Ortodontia": 34825,
              "Periodontia": 1610,
              "Prevenção": 17757.52,
              "Prótese": 18900,
              "Urgência": 1700,
              "Outros": 18357.5,
              "Harmonização facial": 30008
      },
      totalPorTratamento: {
              "Aumento de Coroa Clínica": 200,
              "Toxina botulínica (botox)": 11940,
              "Clareamento Dentário Caseiro": 1190,
              "Gengivectomia": 560,
              "Restauração Temporária (Expectante)": 600,
              "Restauração em Resina Fotopolimerizável 2 faces": 6000,
              "Mantenedor de espaço fixo": 1200,
              "Mantenedor de espaço removível": 1360,
              "Recimentação de Trabalhos Protéticos": 650,
              "Preenchimento do sulco nasogeniano (bigode chinês)": 1900,
              "Preenchimento de sulco labiomentoniano (marionete)": 100,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1267.52,
              "Bloco Porcelana Pura": 4500,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 4940,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 2560,
              "Tratamento Odontológico": 9620,
              "Pulpotomia em dente decíduo": 1200,
              "Exodontia com Retalho": 900,
              "Exodontia Complexa de Decíduo": 650,
              "Terapia a Laser 3 sessões": 1700,
              "Harmonização Facial": 3630,
              "Colagem de Fragmentos Dentários": 650,
              "Exodontia de Raiz Residual": 800,
              "Exodontia Simples de Decíduo": 2902.5,
              "Frenectomia Lingual Laser Cirurgico": 2800,
              "Restauração em Resina Fotopolimerizável 1 face": 2495,
              "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 3800,
              "Manutenção Aparelho Expansor": 150,
              "Oxido Nitroso": 1237.5,
              "Raspagem Sub-gengival (RASUB)": 850,
              "Consulta de Avaliação": 200,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 11940,
              "Refil Escova Elétrica": 90,
              "Bloco Cerômero": 900,
              "Lente Porcelana Pura": 10000,
              "Prótese Total (PT)": 1500,
              "Consulta Odontológica de Urgência": 400,
              "Preenchimento de malar": 2700,
              "Bioestimulador Radiesse": 3780,
              "Coroa Total Pré-Fabricado de Zircônia": 2000,
              "Aparelho Ortopédico Expansor Maxilar": 10200,
              "Aparelho Ortopédico Expansor Mandibular": 6400,
              "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 180,
              "Paciente Modelo Bioestimulador Fios de PDO terço superior": 250,
              "Paciente Modelo Bioestimulador Fios de PDO full face": 950,
              "Paciente Modelo Bioestimulador Radiesse 1 seringa": 960,
              "Paciente Modelo Preenchimento olheira 1 ml": 598,
              "Paciente Modelo Preenchimento mento 1 ml": 1240,
              "Paciente Modelo Preenchimento Malar 1 ml": 620,
              "Paciente Modelo Preenchimento boca 1 ml": 1160,
              "Frenectomia lingual a laser com sedação de óxido nitroso": 1800,
              "Aparelho Expansor Hass": 9200,
              "Manutenção de Aparelho Ortodôntico Fixo": 1275,
              "Myobrace": 3800
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia com Retalho": 900,
                      "Exodontia Complexa de Decíduo": 650,
                      "Exodontia de Raiz Residual": 800,
                      "Exodontia Simples de Decíduo": 2902.5,
                      "Frenectomia Lingual Laser Cirurgico": 2800,
                      "Frenectomia lingual a laser com sedação de óxido nitroso": 1800
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 1190,
                      "Restauração Temporária (Expectante)": 600,
                      "Restauração em Resina Fotopolimerizável 2 faces": 6000,
                      "Restauração em Resina Fotopolimerizável 1 face": 2495
              },
              "Endodontia": {
                      "Pulpotomia em dente decíduo": 1200
              },
              "Ortodontia": {
                      "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 3800,
                      "Manutenção Aparelho Expansor": 150,
                      "Aparelho Ortopédico Expansor Maxilar": 10200,
                      "Aparelho Ortopédico Expansor Mandibular": 6400,
                      "Aparelho Expansor Hass": 9200,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1275,
                      "Myobrace": 3800
              },
              "Periodontia": {
                      "Aumento de Coroa Clínica": 200,
                      "Gengivectomia": 560,
                      "Raspagem Sub-gengival (RASUB)": 850
              },
              "Prevenção": {
                      "Mantenedor de espaço fixo": 1200,
                      "Mantenedor de espaço removível": 1360,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1267.52,
                      "Terapia a Laser 3 sessões": 1700,
                      "Consulta de Avaliação": 200,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 11940,
                      "Refil Escova Elétrica": 90
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 4500,
                      "Bloco Cerômero": 900,
                      "Lente Porcelana Pura": 10000,
                      "Prótese Total (PT)": 1500,
                      "Coroa Total Pré-Fabricado de Zircônia": 2000
              },
              "Urgência": {
                      "Recimentação de Trabalhos Protéticos": 650,
                      "Colagem de Fragmentos Dentários": 650,
                      "Consulta Odontológica de Urgência": 400
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 4940,
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 2560,
                      "Tratamento Odontológico": 9620,
                      "Oxido Nitroso": 1237.5
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 11940,
                      "Preenchimento do sulco nasogeniano (bigode chinês)": 1900,
                      "Preenchimento de sulco labiomentoniano (marionete)": 100,
                      "Harmonização Facial": 3630,
                      "Preenchimento de malar": 2700,
                      "Bioestimulador Radiesse": 3780,
                      "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 180,
                      "Paciente Modelo Bioestimulador Fios de PDO terço superior": 250,
                      "Paciente Modelo Bioestimulador Fios de PDO full face": 950,
                      "Paciente Modelo Bioestimulador Radiesse 1 seringa": 960,
                      "Paciente Modelo Preenchimento olheira 1 ml": 598,
                      "Paciente Modelo Preenchimento mento 1 ml": 1240,
                      "Paciente Modelo Preenchimento Malar 1 ml": 620,
                      "Paciente Modelo Preenchimento boca 1 ml": 1160
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 8,
      mesNome: 'Agosto',
      totalVendas: 79847.50,
      totalPorEspecialidade: {
              "Cirurgia": 6550,
              "Dentística": 16237.5,
              "Endodontia": 3600,
              "Implantodontia": 2553.86,
              "Ortodontia": 8865,
              "Periodontia": 5750,
              "Prevenção": 13590,
              "Prótese": 10246.140000000001,
              "Urgência": 1117.5,
              "Outros": 10437.5,
              "Harmonização facial": 900
      },
      totalPorTratamento: {
              "Laser Terapia": 400,
              "Coroa Provisória sobre Implante": 2153.86,
              "Ajuste Oclusal por desgaste": 400,
              "Toxina botulínica (botox)": 900,
              "Restauração em Resina Fotopolimerizável 2 faces": 9937.5,
              "Restauração em Resina Fotopolimerizável 3 faces": 1700,
              "Mantenedor de espaço removível": 1600,
              "Exodontia Siso": 2610,
              "Escova Elétrica": 680,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3150,
              "Bloco Porcelana Pura": 1800,
              "Aplicação de Selante de Fóssulas e Fissuras": 450,
              "Tratamento Odontológico": 7905,
              "Exodontia com Retalho": 855,
              "Colagem de Fragmentos Dentários": 500,
              "Exodontia Simples de Decíduo": 1945,
              "Restauração em Resina Fotopolimerizável 1 face": 1950,
              "Tratamento Endodôntico Multirradicular": 2400,
              "Manutenção Aparelho Expansor": 650,
              "Consulta odontológica": 400,
              "Oxido Nitroso": 1732.5,
              "Raspagem Sub-gengival (RASUB)": 1700,
              "Raspagem Supra-gengival (RAP) - Limpeza": 3650,
              "Consulta de Avaliação": 1200,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6420,
              "Refil Escova Elétrica": 90,
              "Placa Miorrelaxante Reposicionadora Estabilizadora": 6830.74,
              "Provisório para Inlay/Onlay": 1615.4,
              "Consulta Odontológica de Urgência": 617.5,
              "Aparelho Ortopédico Expansor Mandibular": 6440,
              "Reparo de Resina Composta": 1750,
              "Restauração ponta de dente": 900,
              "Torque coroa sobre implante": 400,
              "Frenectomia Labial Laser Cirurgico": 1140,
              "Manutenção de Aparelho Ortodôntico Fixo": 1775
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 2610,
                      "Exodontia com Retalho": 855,
                      "Exodontia Simples de Decíduo": 1945,
                      "Frenectomia Labial Laser Cirurgico": 1140
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 9937.5,
                      "Restauração em Resina Fotopolimerizável 3 faces": 1700,
                      "Restauração em Resina Fotopolimerizável 1 face": 1950,
                      "Reparo de Resina Composta": 1750,
                      "Restauração ponta de dente": 900
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Tratamento Endodôntico Multirradicular": 2400
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 2153.86,
                      "Torque coroa sobre implante": 400
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 650,
                      "Aparelho Ortopédico Expansor Mandibular": 6440,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1775
              },
              "Periodontia": {
                      "Ajuste Oclusal por desgaste": 400,
                      "Raspagem Sub-gengival (RASUB)": 1700,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 3650
              },
              "Prevenção": {
                      "Mantenedor de espaço removível": 1600,
                      "Escova Elétrica": 680,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3150,
                      "Aplicação de Selante de Fóssulas e Fissuras": 450,
                      "Consulta de Avaliação": 1200,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6420,
                      "Refil Escova Elétrica": 90
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 1800,
                      "Placa Miorrelaxante Reposicionadora Estabilizadora": 6830.74,
                      "Provisório para Inlay/Onlay": 1615.4
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 500,
                      "Consulta Odontológica de Urgência": 617.5
              },
              "Outros": {
                      "Laser Terapia": 400,
                      "Tratamento Odontológico": 7905,
                      "Consulta odontológica": 400,
                      "Oxido Nitroso": 1732.5
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 900
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 9,
      mesNome: 'Setembro',
      totalVendas: 98533.45,
      totalPorEspecialidade: {
              "Cirurgia": 8522.5,
              "Dentística": 11337.5,
              "Endodontia": 2400,
              "Implantodontia": 6630,
              "Ortodontia": 24270,
              "Periodontia": 4930,
              "Prevenção": 5140,
              "Prótese": 17475,
              "Urgência": 600,
              "Outros": 3875,
              "Harmonização facial": 13353.45
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 1600,
              "Restauração em Resina Fotopolimerizável 2 faces": 750,
              "Restauração em Resina Fotopolimerizável 4 faces": 3800,
              "Escova Elétrica": 170,
              "Bloco Porcelana Pura": 12150,
              "Coroa Porcelana Pura": 4425,
              "Tratamento Odontológico": 2590,
              "Pino Pré Fabricado": 900,
              "Colagem de Fragmentos Dentários": 600,
              "Exodontia Simples de Decíduo": 3612.5,
              "Frenectomia Lingual Laser Cirurgico": 1710,
              "Restauração em Resina Fotopolimerizável 1 face": 2967.5,
              "Sessão Clareamento em Consultório": 400,
              "Tratamento Endodôntico Multirradicular": 2400,
              "Instalação de Implante Ósseo Integrado": 6630,
              "Manutenção Aparelho Expansor": 2860,
              "Consulta odontológica": 880,
              "Oxido Nitroso": 405,
              "Raspagem Sub-gengival (RASUB)": 3230,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1700,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 3440,
              "Refil Escova Elétrica": 45,
              "Aparelho Ortopédico Expansor Maxilar": 10080,
              "Aparelho Ortopédico Expansor Mandibular": 10080,
              "Paciente Modelo Preenchimento bigode chinês 1 ml": 540,
              "Paciente Modelo Preenchimento olheira 1 ml": 520,
              "Paciente Modelo Preenchimento mento 1 ml": 620,
              "Paciente Modelo Preenchimento Malar 1 ml": 1922,
              "Paciente Modelo Preenchimento boca 1 ml": 613.95,
              "Paciente Modelo Botox full face": 2287.5,
              "Frenectomia Labial Laser Cirurgico": 3200,
              "Sessão Terapia a Laser": 1485,
              "IOIS Cursos - Pré-Matrícula Mentoria": 250,
              "IOIS Cursos - Botox e Preenchedores": 5000,
              "Clareamento Associado": 3420,
              "Manutenção de Aparelho Ortodôntico Fixo": 1250
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 3612.5,
                      "Frenectomia Lingual Laser Cirurgico": 1710,
                      "Frenectomia Labial Laser Cirurgico": 3200
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 750,
                      "Restauração em Resina Fotopolimerizável 4 faces": 3800,
                      "Restauração em Resina Fotopolimerizável 1 face": 2967.5,
                      "Sessão Clareamento em Consultório": 400,
                      "Clareamento Associado": 3420
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 2400
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 6630
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 2860,
                      "Aparelho Ortopédico Expansor Maxilar": 10080,
                      "Aparelho Ortopédico Expansor Mandibular": 10080,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1250
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 3230,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1700
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 3440,
                      "Refil Escova Elétrica": 45,
                      "Sessão Terapia a Laser": 1485
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 12150,
                      "Coroa Porcelana Pura": 4425,
                      "Pino Pré Fabricado": 900
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 600
              },
              "Outros": {
                      "Tratamento Odontológico": 2590,
                      "Consulta odontológica": 880,
                      "Oxido Nitroso": 405
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 1600,
                      "Paciente Modelo Preenchimento bigode chinês 1 ml": 540,
                      "Paciente Modelo Preenchimento olheira 1 ml": 520,
                      "Paciente Modelo Preenchimento mento 1 ml": 620,
                      "Paciente Modelo Preenchimento Malar 1 ml": 1922,
                      "Paciente Modelo Preenchimento boca 1 ml": 613.95,
                      "Paciente Modelo Botox full face": 2287.5,
                      "IOIS Cursos - Pré-Matrícula Mentoria": 250,
                      "IOIS Cursos - Botox e Preenchedores": 5000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 10,
      mesNome: 'Outubro',
      totalVendas: 87211.50,
      totalPorEspecialidade: {
              "Cirurgia": 3325,
              "Dentística": 1200,
              "Endodontia": 1850,
              "Implantodontia": 25000,
              "Ortodontia": 12791,
              "Periodontia": 2797.5,
              "Prevenção": 9873,
              "Prótese": 7600,
              "Urgência": 2300,
              "Outros": 4697,
              "Harmonização facial": 15778
      },
      totalPorTratamento: {
              "Laser Terapia": 400,
              "Protocolo superior": 12000,
              "Toxina botulínica (botox)": 4399,
              "Tratamento Endodôntico Unirradicular": 1850,
              "Exodontia Siso": 600,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 618,
              "Bloco Porcelana Pura": 2900,
              "Coroa Porcelana Pura": 3700,
              "Aplicação de Selante de Fóssulas e Fissuras": 450,
              "Prótese Total Imediata (PT)": 1000,
              "Tratamento Odontológico": 1250,
              "Colagem de Fragmentos Dentários": 650,
              "Exodontia Simples de Decíduo": 1125,
              "Restauração em Resina Fotopolimerizável 1 face": 1200,
              "Instalação de Implante Ósseo Integrado": 13000,
              "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 6156,
              "Manutenção Aparelho Expansor": 1210,
              "Consulta odontológica": 2240,
              "Oxido Nitroso": 807,
              "Raspagem Sub-gengival (RASUB)": 425,
              "Raspagem Supra-gengival (RAP) - Limpeza": 2372.5,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8805,
              "Consulta Odontológica de Urgência": 1650,
              "Fio de PDO tração": 7000,
              "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 1850,
              "Paciente Modelo Botox full face": 800,
              "Colagem Contenção Fixa": 300,
              "Frenectomia Labial Laser Cirurgico": 1600,
              "IOIS Cursos - Pré-Matrícula Mentoria": 1729,
              "Aparelho ortopédico expansor com grade palatina": 3800,
              "Manutenção de Aparelho Ortodôntico Fixo": 1325
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 600,
                      "Exodontia Simples de Decíduo": 1125,
                      "Frenectomia Labial Laser Cirurgico": 1600
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 1200
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1850
              },
              "Implantodontia": {
                      "Protocolo superior": 12000,
                      "Instalação de Implante Ósseo Integrado": 13000
              },
              "Ortodontia": {
                      "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 6156,
                      "Manutenção Aparelho Expansor": 1210,
                      "Colagem Contenção Fixa": 300,
                      "Aparelho ortopédico expansor com grade palatina": 3800,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1325
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 425,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 2372.5
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 618,
                      "Aplicação de Selante de Fóssulas e Fissuras": 450,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8805
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 2900,
                      "Coroa Porcelana Pura": 3700,
                      "Prótese Total Imediata (PT)": 1000
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 650,
                      "Consulta Odontológica de Urgência": 1650
              },
              "Outros": {
                      "Laser Terapia": 400,
                      "Tratamento Odontológico": 1250,
                      "Consulta odontológica": 2240,
                      "Oxido Nitroso": 807
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4399,
                      "Fio de PDO tração": 7000,
                      "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 1850,
                      "Paciente Modelo Botox full face": 800,
                      "IOIS Cursos - Pré-Matrícula Mentoria": 1729
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 11,
      mesNome: 'Novembro',
      totalVendas: 125716.90,
      totalPorEspecialidade: {
              "Cirurgia": 1210,
              "Dentística": 5823,
              "Ortodontia": 10910,
              "Periodontia": 3255,
              "Prevenção": 6024,
              "Prótese": 67500,
              "Outros": 14260,
              "Harmonização facial": 16734.9
      },
      totalPorTratamento: {
              "Laser Terapia": 2280,
              "Harmonyca": 4500,
              "Toxina botulínica (botox)": 8994.9,
              "Escova Elétrica": 340,
              "Coroa Porcelana Pura": 3500,
              "Tratamento Odontológico": 9200,
              "Bioestimulador Sculptra": 3240,
              "Placa de Clareamento": 1500,
              "Contenção Fixa": 900,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1800,
              "Exodontia Simples de Decíduo": 810,
              "Frenectomia Lingual Laser Cirurgico": 400,
              "Restauração em Resina Fotopolimerizável 1 face": 4023,
              "Manutenção Aparelho Expansor": 2460,
              "Placa de Hawlay Superior": 1800,
              "Consulta odontológica": 980,
              "Raspagem Sub-gengival (RASUB)": 850,
              "Raspagem Supra-gengival (RAP) - Limpeza": 2405,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5639,
              "Refil Escova Elétrica": 45,
              "Lente Porcelana Pura": 64000,
              "Seringa clareamento": 300,
              "Manutenção de Aparelho Ortodôntico Fixo": 1450,
              "Placa de Mordida Ortodôntica": 1800,
              "Myobrace": 2500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 810,
                      "Frenectomia Lingual Laser Cirurgico": 400
              },
              "Dentística": {
                      "Placa de Clareamento": 1500,
                      "Restauração em Resina Fotopolimerizável 1 face": 4023,
                      "Seringa clareamento": 300
              },
              "Ortodontia": {
                      "Contenção Fixa": 900,
                      "Manutenção Aparelho Expansor": 2460,
                      "Placa de Hawlay Superior": 1800,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1450,
                      "Placa de Mordida Ortodôntica": 1800,
                      "Myobrace": 2500
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 850,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 2405
              },
              "Prevenção": {
                      "Escova Elétrica": 340,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5639,
                      "Refil Escova Elétrica": 45
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 3500,
                      "Lente Porcelana Pura": 64000
              },
              "Outros": {
                      "Laser Terapia": 2280,
                      "Tratamento Odontológico": 9200,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1800,
                      "Consulta odontológica": 980
              },
              "Harmonização facial": {
                      "Harmonyca": 4500,
                      "Toxina botulínica (botox)": 8994.9,
                      "Bioestimulador Sculptra": 3240
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2022,
      mes: 12,
      mesNome: 'Dezembro',
      totalVendas: 57606.50,
      totalPorEspecialidade: {
              "Cirurgia": 1550,
              "Dentística": 15719.5,
              "Endodontia": 1400,
              "Implantodontia": 2340,
              "Ortodontia": 3750,
              "Periodontia": 2600,
              "Prevenção": 7550,
              "Prótese": 6350,
              "Outros": 5850,
              "Harmonização facial": 10497
      },
      totalPorTratamento: {
              "Laser Terapia": 400,
              "Toxina botulínica (botox)": 5797,
              "Restauração Temporária (Expectante)": 450,
              "Tratamento Endodôntico Unirradicular": 1400,
              "Tratamento de Fluorose - microabrasão": 400,
              "Exodontia Siso": 1100,
              "Ajuste e reembasamento aparelho ortopédico": 1200,
              "Escova Elétrica": 680,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 650,
              "Coroa Porcelana Pura": 5800,
              "Tratamento Odontológico": 4000,
              "Harmonização Facial": 1000,
              "Exodontia Simples de Decíduo": 450,
              "Restauração em Resina Fotopolimerizável 1 face": 15179.5,
              "Coroa Total Metalo Cerâmica sobre Implante": 2340,
              "Manutenção Aparelho Expansor": 400,
              "Consulta odontológica": 1000,
              "Oxido Nitroso": 450,
              "Raspagem Supra-gengival (RAP) - Limpeza": 2200,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6220,
              "Provisório para Faceta": 550,
              "Fios de PDO liso": 3700,
              "Aparelho Expansor Hass": 1200,
              "Seringa clareamento": 90,
              "Manutenção de Aparelho Ortodôntico Fixo": 950
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 1100,
                      "Exodontia Simples de Decíduo": 450
              },
              "Dentística": {
                      "Restauração Temporária (Expectante)": 450,
                      "Restauração em Resina Fotopolimerizável 1 face": 15179.5,
                      "Seringa clareamento": 90
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1400
              },
              "Implantodontia": {
                      "Coroa Total Metalo Cerâmica sobre Implante": 2340
              },
              "Ortodontia": {
                      "Ajuste e reembasamento aparelho ortopédico": 1200,
                      "Manutenção Aparelho Expansor": 400,
                      "Aparelho Expansor Hass": 1200,
                      "Manutenção de Aparelho Ortodôntico Fixo": 950
              },
              "Periodontia": {
                      "Tratamento de Fluorose - microabrasão": 400,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 2200
              },
              "Prevenção": {
                      "Escova Elétrica": 680,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 650,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6220
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 5800,
                      "Provisório para Faceta": 550
              },
              "Outros": {
                      "Laser Terapia": 400,
                      "Tratamento Odontológico": 4000,
                      "Consulta odontológica": 1000,
                      "Oxido Nitroso": 450
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 5797,
                      "Harmonização Facial": 1000,
                      "Fios de PDO liso": 3700
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 1,
      mesNome: 'Janeiro',
      totalVendas: 64478.15,
      totalPorEspecialidade: {
              "Cirurgia": 7150,
              "Dentística": 4110,
              "Endodontia": 7500,
              "Implantodontia": 3000,
              "Ortodontia": 8035,
              "Periodontia": 10285,
              "Prevenção": 9830,
              "Urgência": 600,
              "Outros": 4350,
              "Harmonização facial": 9618.15
      },
      totalPorTratamento: {
              "Laser Terapia": 800,
              "Harmonyca": 3500,
              "Implante Ortodôntico": 400,
              "Toxina botulínica (botox)": 6118.15,
              "Tratamento Endodôntico Unirradicular": 700,
              "Escova Elétrica": 170,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Enxerto com Osso Liofilizado": 6000,
              "Exodontia Simples de Permanente": 1550,
              "Contenção Fixa": 600,
              "Colagem de Fragmentos Dentários": 600,
              "Exodontia Simples de Decíduo": 4700,
              "Restauração em Resina Fotopolimerizável 1 face": 4110,
              "Tratamento Endodôntico Multirradicular": 5600,
              "Instalação de Implante Ósseo Integrado": 2600,
              "Manutenção Aparelho Expansor": 1680,
              "Consulta odontológica": 1750,
              "Oxido Nitroso": 1800,
              "Raspagem Supra-gengival (RAP) - Limpeza": 4285,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 9570,
              "Refil Escova Elétrica": 90,
              "Frenectomia Labial Laser Cirurgico": 900,
              "Manutenção de Aparelho Ortodôntico Fixo": 1955,
              "Myobrace": 3800
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 1550,
                      "Exodontia Simples de Decíduo": 4700,
                      "Frenectomia Labial Laser Cirurgico": 900
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 4110
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 700,
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Tratamento Endodôntico Multirradicular": 5600
              },
              "Implantodontia": {
                      "Implante Ortodôntico": 400,
                      "Instalação de Implante Ósseo Integrado": 2600
              },
              "Ortodontia": {
                      "Contenção Fixa": 600,
                      "Manutenção Aparelho Expansor": 1680,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1955,
                      "Myobrace": 3800
              },
              "Periodontia": {
                      "Enxerto com Osso Liofilizado": 6000,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 4285
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 9570,
                      "Refil Escova Elétrica": 90
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 600
              },
              "Outros": {
                      "Laser Terapia": 800,
                      "Consulta odontológica": 1750,
                      "Oxido Nitroso": 1800
              },
              "Harmonização facial": {
                      "Harmonyca": 3500,
                      "Toxina botulínica (botox)": 6118.15
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 2,
      mesNome: 'Fevereiro',
      totalVendas: 136852.50,
      totalPorEspecialidade: {
              "Cirurgia": 8740,
              "Dentística": 18912.5,
              "Endodontia": 8250,
              "Implantodontia": 9750,
              "Ortodontia": 1730,
              "Periodontia": 6970,
              "Prevenção": 10690,
              "Prótese": 27200,
              "Outros": 36170,
              "Harmonização facial": 8440
      },
      totalPorTratamento: {
              "Laser Terapia": 800,
              "Coroa Provisória sobre Implante": 900,
              "Toxina botulínica (botox)": 3200,
              "Flúor Terapia": 400,
              "Restauração em Resina Fotopolimerizável 2 faces": 5212.5,
              "Restauração em Resina Fotopolimerizável 3 faces": 3400,
              "Mantenedor de espaço fixo": 1600,
              "Exodontia Siso": 300,
              "Tratamento Endodôntico em Dente Decíduo": 2400,
              "Bloco Porcelana Pura": 2500,
              "Coroa Porcelana Pura": 5800,
              "Aplicação de Selante de Fóssulas e Fissuras": 3750,
              "Manutenção Aparelho Ortopédico": 380,
              "Tratamento Odontológico": 31290,
              "Curativo de Demora": 900,
              "Cirurgia com Retalho": 1800,
              "Exodontia com Odonto-Secção": 900,
              "Exodontia Simples de Decíduo": 2250,
              "Ulectomia": 450,
              "Frenectomia Lingual Laser Cirurgico": 1900,
              "Restauração em Resina Fotopolimerizável 1 face": 10300,
              "Capeamento Pulpar Direto": 1350,
              "Tratamento Endodôntico Birradicular": 1800,
              "Tratamento Endodôntico Multirradicular": 1800,
              "Implante de Zirconia": 4950,
              "Instalação de Implante Ósseo Integrado": 3500,
              "Manutenção Aparelho Expansor": 350,
              "Consulta Inicial": 400,
              "Consulta odontológica": 2580,
              "Oxido Nitroso": 1100,
              "Raspagem Sub-gengival (RASUB)": 1700,
              "Raspagem Supra-gengival (RAP) - Limpeza": 5270,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4940,
              "Lente Porcelana Pura": 18000,
              "Provisório para Inlay/Onlay": 900,
              "Preenchimento labial": 1300,
              "Bioestimulador Radiesse": 2340,
              "Paciente Modelo Botox full face": 1600,
              "Torque coroa sobre implante": 400,
              "Frenectomia Labial Laser Cirurgico": 1140,
              "Manutenção de Aparelho Ortodôntico Fixo": 1000
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 300,
                      "Cirurgia com Retalho": 1800,
                      "Exodontia com Odonto-Secção": 900,
                      "Exodontia Simples de Decíduo": 2250,
                      "Ulectomia": 450,
                      "Frenectomia Lingual Laser Cirurgico": 1900,
                      "Frenectomia Labial Laser Cirurgico": 1140
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 5212.5,
                      "Restauração em Resina Fotopolimerizável 3 faces": 3400,
                      "Restauração em Resina Fotopolimerizável 1 face": 10300
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 2400,
                      "Curativo de Demora": 900,
                      "Capeamento Pulpar Direto": 1350,
                      "Tratamento Endodôntico Birradicular": 1800,
                      "Tratamento Endodôntico Multirradicular": 1800
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 900,
                      "Implante de Zirconia": 4950,
                      "Instalação de Implante Ósseo Integrado": 3500,
                      "Torque coroa sobre implante": 400
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 380,
                      "Manutenção Aparelho Expansor": 350,
                      "Manutenção de Aparelho Ortodôntico Fixo": 1000
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 1700,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 5270
              },
              "Prevenção": {
                      "Flúor Terapia": 400,
                      "Mantenedor de espaço fixo": 1600,
                      "Aplicação de Selante de Fóssulas e Fissuras": 3750,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4940
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 2500,
                      "Coroa Porcelana Pura": 5800,
                      "Lente Porcelana Pura": 18000,
                      "Provisório para Inlay/Onlay": 900
              },
              "Outros": {
                      "Laser Terapia": 800,
                      "Tratamento Odontológico": 31290,
                      "Consulta Inicial": 400,
                      "Consulta odontológica": 2580,
                      "Oxido Nitroso": 1100
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3200,
                      "Preenchimento labial": 1300,
                      "Bioestimulador Radiesse": 2340,
                      "Paciente Modelo Botox full face": 1600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 3,
      mesNome: 'Março',
      totalVendas: 111171.00,
      totalPorEspecialidade: {
              "Cirurgia": 13552.5,
              "Dentística": 20435.98,
              "Endodontia": 3010,
              "Implantodontia": 4930.02,
              "Ortodontia": 1675,
              "Periodontia": 6752.5,
              "Prevenção": 10335,
              "Prótese": 36812,
              "Urgência": 468,
              "Outros": 6000,
              "Harmonização facial": 7200
      },
      totalPorTratamento: {
              "Laser Terapia": 800,
              "Braquete Estético": 500,
              "Toxina botulínica (botox)": 3200,
              "Clareamento Dentário Caseiro": 1900,
              "Clareamento em Consultório": 266,
              "Restauração em Resina Fotopolimerizável 2 faces": 10799.98,
              "Tratamento Endodôntico Unirradicular": 2560,
              "Restauração Inlay em Cerâmica Pura": 7200,
              "Exodontia Siso": 7515,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1484.23,
              "Coroa Porcelana Pura": 9000,
              "Aplicação de Selante de Fóssulas e Fissuras": 425.77,
              "Tratamento Odontológico": 800,
              "Curativo de Demora": 450,
              "Consulta Odontológica Integrativa": 600,
              "Cirurgia com Retalho": 1200,
              "Exodontia de Raiz Residual": 800,
              "Exodontia Simples de Decíduo": 2687.5,
              "Frenectomia Lingual Laser Cirurgico": 1350,
              "Restauração em Resina Fotopolimerizável 1 face": 5590,
              "Sessão Clareamento em Consultório": 1400,
              "Coroa Total Metalo Cerâmica sobre Implante": 4930.02,
              "Manutenção Aparelho Expansor": 700,
              "Consulta Inicial": 400,
              "Consulta odontológica": 2650,
              "Oxido Nitroso": 1350,
              "Raspagem Sub-gengival (RASUB)": 1700,
              "Raspagem Supra-gengival (RAP) - Limpeza": 5052.5,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7480,
              "Refil Escova Elétrica": 45,
              "Lente Porcelana Pura": 18020,
              "Placa Miorrelaxante Reposicionadora Estabilizadora": 2592,
              "Consulta Odontológica de Urgência": 468,
              "Sessão Terapia a Laser": 300,
              "Ultraformer III Full Face": 4000,
              "Seringa clareamento": 480,
              "Manutenção de Aparelho Ortodôntico Fixo": 475
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 7515,
                      "Cirurgia com Retalho": 1200,
                      "Exodontia de Raiz Residual": 800,
                      "Exodontia Simples de Decíduo": 2687.5,
                      "Frenectomia Lingual Laser Cirurgico": 1350
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 1900,
                      "Clareamento em Consultório": 266,
                      "Restauração em Resina Fotopolimerizável 2 faces": 10799.98,
                      "Restauração em Resina Fotopolimerizável 1 face": 5590,
                      "Sessão Clareamento em Consultório": 1400,
                      "Seringa clareamento": 480
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 2560,
                      "Curativo de Demora": 450
              },
              "Implantodontia": {
                      "Coroa Total Metalo Cerâmica sobre Implante": 4930.02
              },
              "Ortodontia": {
                      "Braquete Estético": 500,
                      "Manutenção Aparelho Expansor": 700,
                      "Manutenção de Aparelho Ortodôntico Fixo": 475
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 1700,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 5052.5
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1484.23,
                      "Aplicação de Selante de Fóssulas e Fissuras": 425.77,
                      "Consulta Odontológica Integrativa": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7480,
                      "Refil Escova Elétrica": 45,
                      "Sessão Terapia a Laser": 300
              },
              "Prótese": {
                      "Restauração Inlay em Cerâmica Pura": 7200,
                      "Coroa Porcelana Pura": 9000,
                      "Lente Porcelana Pura": 18020,
                      "Placa Miorrelaxante Reposicionadora Estabilizadora": 2592
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 468
              },
              "Outros": {
                      "Laser Terapia": 800,
                      "Tratamento Odontológico": 800,
                      "Consulta Inicial": 400,
                      "Consulta odontológica": 2650,
                      "Oxido Nitroso": 1350
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3200,
                      "Ultraformer III Full Face": 4000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 4,
      mesNome: 'Abril',
      totalVendas: 75676.25,
      totalPorEspecialidade: {
              "Cirurgia": 3060,
              "Dentística": 2245,
              "Endodontia": 2490,
              "Implantodontia": 2000,
              "Ortodontia": 8820,
              "Periodontia": 5257.5,
              "Prevenção": 11823,
              "Outros": 14412,
              "Harmonização facial": 25568.75
      },
      totalPorTratamento: {
              "Laser Terapia": 780,
              "Coroa Provisória sobre Implante": 2000,
              "Toxina botulínica (botox)": 2600,
              "Restauração em Resina Fotopolimerizável 2 faces": 1725,
              "Tratamento Endodôntico Unirradicular": 1280,
              "Escova Elétrica": 170,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1235,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1250,
              "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 2000,
              "Placa de mordida miorelaxante": 2815,
              "Manutenção Aparelho Ortopédico": 200,
              "Tratamento Odontológico": 8682,
              "Curativo de Demora": 450,
              "Contenção Fixa": 900,
              "Harmonização Facial": 10413.75,
              "Frenectomia Lingual Laser Cirurgico": 3060,
              "Restauração em Resina Fotopolimerizável 1 face": 520,
              "Capeamento Pulpar Direto": 760,
              "Manutenção Aparelho Expansor": 600,
              "Placa de Hawlay Superior": 1800,
              "Consulta odontológica": 2500,
              "Oxido Nitroso": 450,
              "Raspagem Sub-gengival (RASUB)": 850,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1592.5,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8950,
              "Refil Escova Elétrica": 218,
              "Preenchimento de mento": 1530,
              "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 800,
              "Paciente Modelo Botox bruxismo e apertamento": 1600,
              "Aparelho Expansor Hyrax": 2660,
              "Ultraformer III - Papada": 2625,
              "Hidratação Subdérmica com Ácido Hialurônico": 1600,
              "Ultraformer III - Bochechas lifth": 2500,
              "Ultraformer III - Bigode chinês": 1900,
              "Placa Labio-ativa (Lip bumper)": 2660
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Frenectomia Lingual Laser Cirurgico": 3060
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 1725,
                      "Restauração em Resina Fotopolimerizável 1 face": 520
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1280,
                      "Curativo de Demora": 450,
                      "Capeamento Pulpar Direto": 760
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 2000
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 200,
                      "Contenção Fixa": 900,
                      "Manutenção Aparelho Expansor": 600,
                      "Placa de Hawlay Superior": 1800,
                      "Aparelho Expansor Hyrax": 2660,
                      "Placa Labio-ativa (Lip bumper)": 2660
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 2815,
                      "Raspagem Sub-gengival (RASUB)": 850,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1592.5
              },
              "Prevenção": {
                      "Escova Elétrica": 170,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1235,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1250,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8950,
                      "Refil Escova Elétrica": 218
              },
              "Outros": {
                      "Laser Terapia": 780,
                      "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 2000,
                      "Tratamento Odontológico": 8682,
                      "Consulta odontológica": 2500,
                      "Oxido Nitroso": 450
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 2600,
                      "Harmonização Facial": 10413.75,
                      "Preenchimento de mento": 1530,
                      "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 800,
                      "Paciente Modelo Botox bruxismo e apertamento": 1600,
                      "Ultraformer III - Papada": 2625,
                      "Hidratação Subdérmica com Ácido Hialurônico": 1600,
                      "Ultraformer III - Bochechas lifth": 2500,
                      "Ultraformer III - Bigode chinês": 1900
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 5,
      mesNome: 'Maio',
      totalVendas: 107057.66,
      totalPorEspecialidade: {
              "Cirurgia": 3737.5,
              "Dentística": 6337.5,
              "Ortodontia": 6626,
              "Periodontia": 4650,
              "Prevenção": 7597,
              "Prótese": 5800,
              "Outros": 56103.06,
              "Harmonização facial": 16206.6
      },
      totalPorTratamento: {
              "Laser Terapia": 400,
              "Toxina botulínica (botox)": 9756.6,
              "Restauração em Resina Fotopolimerizável 2 faces": 750,
              "Escova Elétrica": 200,
              "Coroa Porcelana Pura": 5800,
              "Aplicação de Selante de Fóssulas e Fissuras": 450,
              "Tratamento Odontológico": 52035.56,
              "Cirurgia com Retalho": 1000,
              "Exodontia Simples de Decíduo": 1050,
              "Frenectomia Lingual Laser Cirurgico": 1687.5,
              "Restauração em Ionômero de Vidro - 2 faces": 550,
              "Restauração em Resina Fotopolimerizável 1 face": 5037.5,
              "Manutenção Aparelho Expansor": 650,
              "Consulta Inicial": 617.5,
              "Consulta odontológica": 2600,
              "Oxido Nitroso": 450,
              "Raspagem Sub-gengival (RASUB)": 2050,
              "Raspagem Supra-gengival (RAP) - Limpeza": 2600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6830,
              "Refil Escova Elétrica": 117,
              "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 750,
              "Paciente Modelo Botox full face": 1900,
              "Aparelho Ortodôntico Fixo Metálico": 500,
              "Ultraformer III - Full face (somente face)": 3800,
              "Mantenedor de espaço fixo com expansor e mola ativa": 3610,
              "Manutenção de Aparelho Ortodôntico Fixo": 500,
              "Myobrace": 1366
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Cirurgia com Retalho": 1000,
                      "Exodontia Simples de Decíduo": 1050,
                      "Frenectomia Lingual Laser Cirurgico": 1687.5
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 750,
                      "Restauração em Ionômero de Vidro - 2 faces": 550,
                      "Restauração em Resina Fotopolimerizável 1 face": 5037.5
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 650,
                      "Aparelho Ortodôntico Fixo Metálico": 500,
                      "Mantenedor de espaço fixo com expansor e mola ativa": 3610,
                      "Manutenção de Aparelho Ortodôntico Fixo": 500,
                      "Myobrace": 1366
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 2050,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 2600
              },
              "Prevenção": {
                      "Escova Elétrica": 200,
                      "Aplicação de Selante de Fóssulas e Fissuras": 450,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6830,
                      "Refil Escova Elétrica": 117
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 5800
              },
              "Outros": {
                      "Laser Terapia": 400,
                      "Tratamento Odontológico": 52035.56,
                      "Consulta Inicial": 617.5,
                      "Consulta odontológica": 2600,
                      "Oxido Nitroso": 450
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 9756.6,
                      "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 750,
                      "Paciente Modelo Botox full face": 1900,
                      "Ultraformer III - Full face (somente face)": 3800
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 6,
      mesNome: 'Junho',
      totalVendas: 67413.50,
      totalPorEspecialidade: {
              "Cirurgia": 2900,
              "Dentística": 11575,
              "Endodontia": 4627.5,
              "Ortodontia": 5796,
              "Periodontia": 4170,
              "Prevenção": 10175,
              "Prótese": 5800,
              "Urgência": 650,
              "Outros": 15562,
              "Harmonização facial": 6158
      },
      totalPorTratamento: {
              "Laser Terapia": 150,
              "Ajuste Oclusal por desgaste": 400,
              "Toxina botulínica (botox)": 4700,
              "Restauração em Resina Fotopolimerizável 2 faces": 2925,
              "Restauração em Resina Fotopolimerizável 3 faces": 1700,
              "Retratamento Endodôntico Unirradicular": 1800,
              "Escova Elétrica": 420,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1300,
              "Coroa Porcelana Pura": 5800,
              "Aplicação de Selante de Fóssulas e Fissuras": 405,
              "Tratamento Odontológico": 13862,
              "Curativo de Demora": 427.5,
              "Consulta Odontológica Integrativa": 600,
              "Exodontia com Retalho": 900,
              "Exodontia Complexa de Decíduo": 650,
              "Exodontia Simples de Decíduo": 1350,
              "Núcleo de Preenchimento": 650,
              "Restauração em Resina Fotopolimerizável 1 face": 5850,
              "Tratamento Endodôntico Multirradicular": 2400,
              "Manutenção Aparelho Expansor": 800,
              "Consulta odontológica": 1100,
              "Oxido Nitroso": 450,
              "Raspagem Supra-gengival (RAP) - Limpeza": 3770,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7450,
              "Consulta Odontológica de Urgência": 650,
              "Aparelho Ortopédico Expansor Mandibular": 3230,
              "Reparo de Resina Composta": 450,
              "Colagem Contenção Fixa": 400,
              "Ultraformer III - Olhos": 1458,
              "Myobrace": 1366
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia com Retalho": 900,
                      "Exodontia Complexa de Decíduo": 650,
                      "Exodontia Simples de Decíduo": 1350
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 2925,
                      "Restauração em Resina Fotopolimerizável 3 faces": 1700,
                      "Núcleo de Preenchimento": 650,
                      "Restauração em Resina Fotopolimerizável 1 face": 5850,
                      "Reparo de Resina Composta": 450
              },
              "Endodontia": {
                      "Retratamento Endodôntico Unirradicular": 1800,
                      "Curativo de Demora": 427.5,
                      "Tratamento Endodôntico Multirradicular": 2400
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 800,
                      "Aparelho Ortopédico Expansor Mandibular": 3230,
                      "Colagem Contenção Fixa": 400,
                      "Myobrace": 1366
              },
              "Periodontia": {
                      "Ajuste Oclusal por desgaste": 400,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 3770
              },
              "Prevenção": {
                      "Escova Elétrica": 420,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1300,
                      "Aplicação de Selante de Fóssulas e Fissuras": 405,
                      "Consulta Odontológica Integrativa": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7450
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 5800
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 650
              },
              "Outros": {
                      "Laser Terapia": 150,
                      "Tratamento Odontológico": 13862,
                      "Consulta odontológica": 1100,
                      "Oxido Nitroso": 450
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4700,
                      "Ultraformer III - Olhos": 1458
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 7,
      mesNome: 'Julho',
      totalVendas: 95035.70,
      totalPorEspecialidade: {
              "Cirurgia": 2777.5,
              "Dentística": 11484.400000000001,
              "Endodontia": 5439.08,
              "Implantodontia": 5200,
              "Ortodontia": 4055,
              "Periodontia": 4893.13,
              "Prevenção": 18997.36,
              "Prótese": 28213.53,
              "Outros": 5050,
              "Harmonização facial": 8925.7
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 4013.2,
              "Limpeza e Manutenção da Prótese Protocolo": 1300,
              "Clareamento Dentário Caseiro": 593.74,
              "Restauração em Resina Fotopolimerizável 2 faces": 4650.050000000001,
              "Restauração em Resina Fotopolimerizável 3 faces": 1274.98,
              "Tratamento Endodôntico Unirradicular": 1260,
              "Tratamento Periodontal": 1440,
              "Escova Elétrica": 340,
              "Bloco Porcelana Pura": 8613.529999999999,
              "Coroa Porcelana Pura": 17400,
              "Aplicação de Selante de Fóssulas e Fissuras": 2250,
              "Tratamento Odontológico": 3000,
              "Curativo de Demora": 2162.29,
              "Consulta Odontológica Integrativa": 400,
              "Exodontia com Retalho": 900,
              "Exodontia Simples de Decíduo": 1877.5,
              "Restauração Atraumática em Dente Decíduo": 225,
              "Restauração em Ionômero de Vidro - 1 face": 450,
              "Restauração em Resina Fotopolimerizável 1 face": 4290.63,
              "Tratamento Endodôntico Multirradicular": 2016.79,
              "Instalação de Implante Ósseo Integrado": 5200,
              "Manutenção Aparelho Expansor": 350,
              "Consulta odontológica": 1600,
              "Oxido Nitroso": 450,
              "Raspagem Supra-gengival (RAP) - Limpeza": 3453.13,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 15065,
              "Refil Escova Elétrica": 60,
              "Bloco Cerômero": 900,
              "Aparelho Ortopédico Expansor Maxilar": 1615,
              "Aparelho Ortopédico Expansor Mandibular": 1615,
              "Ultraformer III - Papada": 1312.5,
              "Ultraformer III - Full face (somente face)": 3600,
              "Profilaxia (limpeza)": 336.14,
              "Raspagem de tártaro supra gengival": 546.22,
              "Manutenção de Aparelho Ortodôntico Fixo": 475
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia com Retalho": 900,
                      "Exodontia Simples de Decíduo": 1877.5
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 593.74,
                      "Restauração em Resina Fotopolimerizável 2 faces": 4650.050000000001,
                      "Restauração em Resina Fotopolimerizável 3 faces": 1274.98,
                      "Restauração Atraumática em Dente Decíduo": 225,
                      "Restauração em Ionômero de Vidro - 1 face": 450,
                      "Restauração em Resina Fotopolimerizável 1 face": 4290.63
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1260,
                      "Curativo de Demora": 2162.29,
                      "Tratamento Endodôntico Multirradicular": 2016.79
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 5200
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 350,
                      "Aparelho Ortopédico Expansor Maxilar": 1615,
                      "Aparelho Ortopédico Expansor Mandibular": 1615,
                      "Manutenção de Aparelho Ortodôntico Fixo": 475
              },
              "Periodontia": {
                      "Tratamento Periodontal": 1440,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 3453.13
              },
              "Prevenção": {
                      "Escova Elétrica": 340,
                      "Aplicação de Selante de Fóssulas e Fissuras": 2250,
                      "Consulta Odontológica Integrativa": 400,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 15065,
                      "Refil Escova Elétrica": 60,
                      "Profilaxia (limpeza)": 336.14,
                      "Raspagem de tártaro supra gengival": 546.22
              },
              "Prótese": {
                      "Limpeza e Manutenção da Prótese Protocolo": 1300,
                      "Bloco Porcelana Pura": 8613.529999999999,
                      "Coroa Porcelana Pura": 17400,
                      "Bloco Cerômero": 900
              },
              "Outros": {
                      "Tratamento Odontológico": 3000,
                      "Consulta odontológica": 1600,
                      "Oxido Nitroso": 450
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4013.2,
                      "Ultraformer III - Papada": 1312.5,
                      "Ultraformer III - Full face (somente face)": 3600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 8,
      mesNome: 'Agosto',
      totalVendas: 77271.00,
      totalPorEspecialidade: {
              "Cirurgia": 5896.77,
              "Dentística": 5738.09,
              "Endodontia": 6960,
              "Implantodontia": 3200,
              "Ortodontia": 10096,
              "Periodontia": 1496.9099999999999,
              "Prevenção": 6360,
              "Prótese": 11460,
              "Urgência": 2353.23,
              "Outros": 3850,
              "Harmonização facial": 19860
      },
      totalPorTratamento: {
              "Laser Terapia": 1650,
              "Coroa Provisória sobre Implante": 600,
              "Toxina botulínica (botox)": 10560,
              "Clareamento Dentário Caseiro": 1900,
              "Clareamento em Consultório": 670.59,
              "Restauração em Resina Fotopolimerizável 2 faces": 1500,
              "Restauração em Resina Fotopolimerizável 3 faces": 850,
              "Escova Elétrica": 400,
              "Preenchimento de olheiras": 1600,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 750,
              "Coroa Cerômero": 3150,
              "Coroa Porcelana Pura": 5510,
              "Aplicação de Selante de Fóssulas e Fissuras": 450,
              "Cirurgia com Retalho": 500,
              "Exodontia com Retalho": 2796.77,
              "Exodontia Simples de Decíduo": 2600,
              "Restauração em Resina Fotopolimerizável 1 face": 617.5,
              "Pulpotomia": 1200,
              "Tratamento Endodôntico Birradicular": 3600,
              "Tratamento Endodôntico Multirradicular": 2160,
              "Instalação de Implante Ósseo Integrado": 2600,
              "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 3420,
              "Manutenção Aparelho Expansor": 1180,
              "Consulta Inicial": 600,
              "Consulta odontológica": 1600,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1496.9099999999999,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4760,
              "Bloco Cerômero": 2800,
              "Consulta Odontológica de Urgência": 2353.23,
              "Preenchimento de mento": 1800,
              "Preenchimento de mandíbula": 3600,
              "Preenchimento de malar": 1800,
              "Aparelho Ortopédico Expansor Mandibular": 3230,
              "Ultraformer III - Full face (somente face)": 500,
              "Seringa clareamento": 200,
              "Manutenção de Aparelho Ortodôntico Fixo": 900,
              "Myobrace": 1366
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Cirurgia com Retalho": 500,
                      "Exodontia com Retalho": 2796.77,
                      "Exodontia Simples de Decíduo": 2600
              },
              "Dentística": {
                      "Clareamento Dentário Caseiro": 1900,
                      "Clareamento em Consultório": 670.59,
                      "Restauração em Resina Fotopolimerizável 2 faces": 1500,
                      "Restauração em Resina Fotopolimerizável 3 faces": 850,
                      "Restauração em Resina Fotopolimerizável 1 face": 617.5,
                      "Seringa clareamento": 200
              },
              "Endodontia": {
                      "Pulpotomia": 1200,
                      "Tratamento Endodôntico Birradicular": 3600,
                      "Tratamento Endodôntico Multirradicular": 2160
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 600,
                      "Instalação de Implante Ósseo Integrado": 2600
              },
              "Ortodontia": {
                      "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 3420,
                      "Manutenção Aparelho Expansor": 1180,
                      "Aparelho Ortopédico Expansor Mandibular": 3230,
                      "Manutenção de Aparelho Ortodôntico Fixo": 900,
                      "Myobrace": 1366
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1496.9099999999999
              },
              "Prevenção": {
                      "Escova Elétrica": 400,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 750,
                      "Aplicação de Selante de Fóssulas e Fissuras": 450,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4760
              },
              "Prótese": {
                      "Coroa Cerômero": 3150,
                      "Coroa Porcelana Pura": 5510,
                      "Bloco Cerômero": 2800
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 2353.23
              },
              "Outros": {
                      "Laser Terapia": 1650,
                      "Consulta Inicial": 600,
                      "Consulta odontológica": 1600
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 10560,
                      "Preenchimento de olheiras": 1600,
                      "Preenchimento de mento": 1800,
                      "Preenchimento de mandíbula": 3600,
                      "Preenchimento de malar": 1800,
                      "Ultraformer III - Full face (somente face)": 500
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 9,
      mesNome: 'Setembro',
      totalVendas: 62946.60,
      totalPorEspecialidade: {
              "Cirurgia": 1050,
              "Dentística": 11725,
              "Endodontia": 2600,
              "Ortodontia": 6330,
              "Periodontia": 2567.5,
              "Prevenção": 11402.5,
              "Prótese": 8305,
              "Outros": 2750,
              "Harmonização facial": 16216.6
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 4726.6,
              "Restauração em Resina Fotopolimerizável 2 faces": 2650,
              "Coroa Porcelana Pura": 4650,
              "Contenção Fixa": 900,
              "Exodontia Simples de Decíduo": 1050,
              "Restauração em Resina Fotopolimerizável 1 face": 3375,
              "Tratamento Endodôntico Multirradicular": 2600,
              "Manutenção Aparelho Expansor": 400,
              "Placa de Hawlay Superior": 1800,
              "Consulta odontológica": 1150,
              "Oxido Nitroso": 400,
              "Raspagem Supra-gengival (RAP) - Limpeza": 2567.5,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8900,
              "Bloco Cerômero": 1600,
              "Aparelho Ortopédico Expansor Maxilar": 3230,
              "Ultraformer III - Papada": 1201.47,
              "Ultraformer III - Pescoço": 2288.53,
              "Provisório": 855,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1852.5,
              "Bioestimulador Sculptra": 3600,
              "Pino Pré Fabricado": 1200,
              "Ultraformer III - Bochechas lifth": 2500,
              "Hidratação Subdérmica com Ácido Hialurônico": 1900,
              "Raspagem de tártaro supra gengival": 650,
              "Restauração em Resina Fotopolimerizável 3 faces": 5700,
              "Consulta Inicial": 1200
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 1050
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 2650,
                      "Restauração em Resina Fotopolimerizável 1 face": 3375,
                      "Restauração em Resina Fotopolimerizável 3 faces": 5700
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 2600
              },
              "Ortodontia": {
                      "Contenção Fixa": 900,
                      "Manutenção Aparelho Expansor": 400,
                      "Placa de Hawlay Superior": 1800,
                      "Aparelho Ortopédico Expansor Maxilar": 3230
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 2567.5
              },
              "Prevenção": {
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8900,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1852.5,
                      "Raspagem de tártaro supra gengival": 650
              },
              "Prótese": {
                      "Coroa Porcelana Pura": 4650,
                      "Bloco Cerômero": 1600,
                      "Provisório": 855,
                      "Pino Pré Fabricado": 1200
              },
              "Outros": {
                      "Consulta odontológica": 1150,
                      "Oxido Nitroso": 400,
                      "Consulta Inicial": 1200
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4726.6,
                      "Ultraformer III - Papada": 1201.47,
                      "Ultraformer III - Pescoço": 2288.53,
                      "Bioestimulador Sculptra": 3600,
                      "Ultraformer III - Bochechas lifth": 2500,
                      "Hidratação Subdérmica com Ácido Hialurônico": 1900
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 10,
      mesNome: 'Outubro',
      totalVendas: 78632.50,
      totalPorEspecialidade: {
              "Cirurgia": 4767.5,
              "Dentística": 21485,
              "Endodontia": 1080,
              "Ortodontia": 12420,
              "Periodontia": 2720,
              "Prevenção": 16467.5,
              "Prótese": 12590,
              "Urgência": 720,
              "Outros": 982.5,
              "Harmonização facial": 5400
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 5400,
              "Coroa Cerômero": 1350,
              "Aplicação de Selante de Fóssulas e Fissuras": 1800,
              "Placa de mordida miorelaxante": 2720,
              "Manutenção Aparelho Ortopédico": 980,
              "Exodontia Simples de Permanente": 467.5,
              "Restauração em Resina Fotopolimerizável 1 face": 2385,
              "Manutenção Aparelho Expansor": 350,
              "Oxido Nitroso": 382.5,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8615,
              "Refil Escova Elétrica": 180,
              "Reparo de Resina Composta": 450,
              "Frenectomia Labial Laser Cirurgico": 1200,
              "Aparelho Expansor Hyrax": 3420,
              "Manutenção de Aparelho Ortodôntico Fixo": 250,
              "Placa Labio-ativa (Lip bumper)": 3420,
              "Myobrace": 4000,
              "Tratamento Endodôntico em Dente Decíduo": 1080,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1852.5,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 2600,
              "Bloco Porcelana Pura": 5800,
              "Coroa Porcelana Pura": 3040,
              "Profilaxia (limpeza)": 1200,
              "Faceta em Resina Fotopolimerizável": 950,
              "Limpeza e Manutenção da Prótese Protocolo": 2400,
              "Restauração em Resina Fotopolimerizável 2 faces": 13900,
              "Núcleo de Preenchimento": 200,
              "Reconstrução em Resina Composta Nanoparticulada": 3600,
              "Exodontia Simples de Decíduo": 900,
              "Frenectomia Lingual Laser Cirurgico": 2200,
              "Consulta odontológica": 600,
              "Escova Elétrica": 220,
              "Consulta Odontológica de Urgência": 720
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 467.5,
                      "Frenectomia Labial Laser Cirurgico": 1200,
                      "Exodontia Simples de Decíduo": 900,
                      "Frenectomia Lingual Laser Cirurgico": 2200
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 2385,
                      "Reparo de Resina Composta": 450,
                      "Faceta em Resina Fotopolimerizável": 950,
                      "Restauração em Resina Fotopolimerizável 2 faces": 13900,
                      "Núcleo de Preenchimento": 200,
                      "Reconstrução em Resina Composta Nanoparticulada": 3600
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1080
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 980,
                      "Manutenção Aparelho Expansor": 350,
                      "Aparelho Expansor Hyrax": 3420,
                      "Manutenção de Aparelho Ortodôntico Fixo": 250,
                      "Placa Labio-ativa (Lip bumper)": 3420,
                      "Myobrace": 4000
              },
              "Periodontia": {
                      "Placa de mordida miorelaxante": 2720
              },
              "Prevenção": {
                      "Aplicação de Selante de Fóssulas e Fissuras": 1800,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8615,
                      "Refil Escova Elétrica": 180,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1852.5,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 2600,
                      "Profilaxia (limpeza)": 1200,
                      "Escova Elétrica": 220
              },
              "Prótese": {
                      "Coroa Cerômero": 1350,
                      "Bloco Porcelana Pura": 5800,
                      "Coroa Porcelana Pura": 3040,
                      "Limpeza e Manutenção da Prótese Protocolo": 2400
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 720
              },
              "Outros": {
                      "Oxido Nitroso": 382.5,
                      "Consulta odontológica": 600
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 5400
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 11,
      mesNome: 'Novembro',
      totalVendas: 90283.60,
      totalPorEspecialidade: {
              "Cirurgia": 4525,
              "Dentística": 21025,
              "Endodontia": 3960,
              "Ortodontia": 1100,
              "Periodontia": 1450,
              "Prevenção": 13745,
              "Prótese": 15160,
              "Urgência": 600,
              "Outros": 2312,
              "Harmonização facial": 26406.6
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 15446.6,
              "Escova Elétrica": 440,
              "Bloco Porcelana Pura": 4860,
              "Bioestimulador Sculptra": 2925,
              "Exodontia Simples de Decíduo": 405,
              "Tratamento Endodôntico Multirradicular": 2160,
              "Consulta odontológica": 800,
              "Consulta Odontológica de Urgência": 600,
              "Preenchimento labial": 5410,
              "Frenectomia Labial Laser Cirurgico": 100,
              "Ultraformer III - Papada": 2625,
              "Manutenção de Aparelho Ortodôntico Fixo": 500,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 855,
              "Coroa Porcelana Pura": 6400,
              "Tratamento Endodôntico Birradicular": 1800,
              "Exodontia com Retalho": 2400,
              "Clareamento em Consultório": 1875,
              "Restauração em Resina Fotopolimerizável 2 faces": 17325,
              "Seringa clareamento": 200,
              "Restauração em Resina Fotopolimerizável 1 face": 675,
              "Aplicação de Selante de Fóssulas e Fissuras": 1200,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 11250,
              "Reconstrução em Resina Composta Nanoparticulada": 950,
              "Frenectomia Lingual Laser Cirurgico": 1620,
              "Manutenção Aparelho Expansor": 600,
              "Laser Terapia": 900,
              "Oxido Nitroso": 612,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1450,
              "Placa Miorrelaxante Reposicionadora Estabilizadora": 3900
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 405,
                      "Frenectomia Labial Laser Cirurgico": 100,
                      "Exodontia com Retalho": 2400,
                      "Frenectomia Lingual Laser Cirurgico": 1620
              },
              "Dentística": {
                      "Clareamento em Consultório": 1875,
                      "Restauração em Resina Fotopolimerizável 2 faces": 17325,
                      "Seringa clareamento": 200,
                      "Restauração em Resina Fotopolimerizável 1 face": 675,
                      "Reconstrução em Resina Composta Nanoparticulada": 950
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 2160,
                      "Tratamento Endodôntico Birradicular": 1800
              },
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 500,
                      "Manutenção Aparelho Expansor": 600
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1450
              },
              "Prevenção": {
                      "Escova Elétrica": 440,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 855,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1200,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 11250
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 4860,
                      "Coroa Porcelana Pura": 6400,
                      "Placa Miorrelaxante Reposicionadora Estabilizadora": 3900
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Consulta odontológica": 800,
                      "Laser Terapia": 900,
                      "Oxido Nitroso": 612
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 15446.6,
                      "Bioestimulador Sculptra": 2925,
                      "Preenchimento labial": 5410,
                      "Ultraformer III - Papada": 2625
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2023,
      mes: 12,
      mesNome: 'Dezembro',
      totalVendas: 54072.50,
      totalPorEspecialidade: {
              "Cirurgia": 2620,
              "Dentística": 14570.04,
              "Endodontia": 1400,
              "Implantodontia": 1200,
              "Ortodontia": 1405,
              "Periodontia": 2970,
              "Prevenção": 18509.13,
              "Prótese": 2900,
              "Urgência": 1550,
              "Outros": 1948.33,
              "Harmonização facial": 5000
      },
      totalPorTratamento: {
              "Exodontia Simples de Decíduo": 1000,
              "Manutenção Aparelho Expansor": 1280,
              "Oxido Nitroso": 1348.33,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1770,
              "Manutenção de Aparelho Ortodôntico Fixo": 125,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5146.67,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 799.96,
              "Bloco Porcelana Pura": 2900,
              "IOIS Cursos - Botox e Preenchedores": 2000,
              "Raspagem de tártaro supra gengival": 950,
              "Profilaxia (limpeza)": 600,
              "Faceta em Resina Fotopolimerizável": 6120,
              "Aumento de Coroa Clínica": 1200,
              "Restauração em Resina Fotopolimerizável 2 faces": 1600,
              "Restauração em Resina Fotopolimerizável 3 faces": 950,
              "Coroa Provisória sobre Implante": 1200,
              "Restauração em Resina Fotopolimerizável 1 face": 5900.04,
              "Aplicação de Selante de Fóssulas e Fissuras": 1500,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8280,
              "Consulta Odontológica Integrativa": 1200,
              "Tratamento Endodôntico Unirradicular": 1400,
              "Frenectomia Lingual Laser Cirurgico": 1620,
              "Toxina botulínica (botox)": 3000,
              "Consulta odontológica": 600,
              "Refil Escova Elétrica": 32.5,
              "Consulta Odontológica de Urgência": 1550
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 1000,
                      "Frenectomia Lingual Laser Cirurgico": 1620
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 6120,
                      "Restauração em Resina Fotopolimerizável 2 faces": 1600,
                      "Restauração em Resina Fotopolimerizável 3 faces": 950,
                      "Restauração em Resina Fotopolimerizável 1 face": 5900.04
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1400
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 1200
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 1280,
                      "Manutenção de Aparelho Ortodôntico Fixo": 125
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1770,
                      "Aumento de Coroa Clínica": 1200
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 5146.67,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 799.96,
                      "Raspagem de tártaro supra gengival": 950,
                      "Profilaxia (limpeza)": 600,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1500,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 8280,
                      "Consulta Odontológica Integrativa": 1200,
                      "Refil Escova Elétrica": 32.5
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 2900
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 1550
              },
              "Outros": {
                      "Oxido Nitroso": 1348.33,
                      "Consulta odontológica": 600
              },
              "Harmonização facial": {
                      "IOIS Cursos - Botox e Preenchedores": 2000,
                      "Toxina botulínica (botox)": 3000
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 1,
      mesNome: 'Janeiro',
      totalVendas: 83822.50,
      totalPorEspecialidade: {
              "Cirurgia": 2716.7200000000003,
              "Dentística": 18795,
              "Endodontia": 2475,
              "Ortodontia": 13630,
              "Periodontia": 1615,
              "Prevenção": 21413.940000000002,
              "Prótese": 12196.84,
              "Urgência": 900,
              "Outros": 600,
              "Harmonização facial": 9480
      },
      totalPorTratamento: {
              "Pulpectomia": 855,
              "Bloco Porcelana Pura": 2250,
              "Tratamento Endodôntico Birradicular": 1620,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 14599.98,
              "Refil Escova Elétrica": 153.01,
              "Lente Porcelana Pura": 5320,
              "Consulta Odontológica de Urgência": 900,
              "Preenchimento labial": 2400,
              "Bionator de Balters": 5500,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1425,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1413.43,
              "Coroa Porcelana Pura": 2826.84,
              "Raspagem de tártaro supra gengival": 1662.5,
              "Profilaxia (limpeza)": 540,
              "Restauração em Resina Fotopolimerizável 2 faces": 11900,
              "Restauração em Resina Fotopolimerizável 1 face": 4150,
              "Bloco Cerômero": 1800,
              "Reparo de Resina Composta": 2145,
              "Aparelho Ortopédico Expansor Maxilar": 3990,
              "Aplicação de Selante de Fóssulas e Fissuras": 1620.02,
              "Remineralização 1 sessão": 600,
              "Exodontia Siso": 900,
              "Exodontia Simples de Decíduo": 300,
              "Limpeza de coroas sobre implante": 706.72,
              "Ulectomia": 810,
              "Toxina botulínica (botox)": 7080,
              "Manutenção Aparelho Expansor": 150,
              "Aparelho Ortopédico Expansor Mandibular": 3990,
              "Laser Terapia": 600,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1615
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Siso": 900,
                      "Exodontia Simples de Decíduo": 300,
                      "Limpeza de coroas sobre implante": 706.72,
                      "Ulectomia": 810
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 11900,
                      "Restauração em Resina Fotopolimerizável 1 face": 4150,
                      "Reparo de Resina Composta": 2145,
                      "Remineralização 1 sessão": 600
              },
              "Endodontia": {
                      "Pulpectomia": 855,
                      "Tratamento Endodôntico Birradicular": 1620
              },
              "Ortodontia": {
                      "Aparelho Ortopédico Expansor Maxilar": 3990,
                      "Bionator de Balters": 5500,
                      "Manutenção Aparelho Expansor": 150,
                      "Aparelho Ortopédico Expansor Mandibular": 3990
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1615
              },
              "Prevenção": {
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 14599.98,
                      "Refil Escova Elétrica": 153.01,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1425,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1413.43,
                      "Raspagem de tártaro supra gengival": 1662.5,
                      "Profilaxia (limpeza)": 540,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1620.02
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 2250,
                      "Lente Porcelana Pura": 5320,
                      "Coroa Porcelana Pura": 2826.84,
                      "Bloco Cerômero": 1800
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 900
              },
              "Outros": {
                      "Laser Terapia": 600
              },
              "Harmonização facial": {
                      "Preenchimento labial": 2400,
                      "Toxina botulínica (botox)": 7080
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 2,
      mesNome: 'Fevereiro',
      totalVendas: 59550.00,
      totalPorEspecialidade: {
              "Cirurgia": 2350,
              "Dentística": 12525,
              "Endodontia": 720,
              "Ortodontia": 4990,
              "Periodontia": 3205,
              "Prevenção": 23444.989999999998,
              "Urgência": 855,
              "Outros": 600,
              "Harmonização facial": 10860.01
      },
      totalPorTratamento: {
              "Consulta Odontológica de Urgência 24 horas": 855,
              "Manutenção Aparelho Ortopédico": 360,
              "Contenção Fixa": 810,
              "Tratamento Endodôntico em Dente Decíduo": 720,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 569.99,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 2240,
              "Tracionamento Cirúrgico com Finalidade Ortodôntica": 1900,
              "Ultraformer III - Full face + pescoço (sem papada)": 7500,
              "Raspagem de tártaro supra gengival": 2755,
              "Restauração em Resina Fotopolimerizável 2 faces": 10625,
              "Restauração em Resina Fotopolimerizável 1 face": 1900,
              "Consulta de Avaliação": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 10080,
              "Consulta Odontológica Integrativa": 1200,
              "Plano Funcional Integrativo": 6000,
              "Placa de Hawlay Inferior": 2200,
              "Exodontia Simples de Decíduo": 450,
              "Toxina botulínica (botox)": 3360.01,
              "Placa de Hawlay Superior": 1620,
              "Consulta odontológica": 600,
              "Ajuste Oclusal por desgaste": 550,
              "Raspagem Supra-gengival (RAP) - Limpeza": 2655
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Tracionamento Cirúrgico com Finalidade Ortodôntica": 1900,
                      "Exodontia Simples de Decíduo": 450
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 10625,
                      "Restauração em Resina Fotopolimerizável 1 face": 1900
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 720
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 360,
                      "Contenção Fixa": 810,
                      "Placa de Hawlay Inferior": 2200,
                      "Placa de Hawlay Superior": 1620
              },
              "Periodontia": {
                      "Ajuste Oclusal por desgaste": 550,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 2655
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 569.99,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 2240,
                      "Raspagem de tártaro supra gengival": 2755,
                      "Consulta de Avaliação": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 10080,
                      "Consulta Odontológica Integrativa": 1200,
                      "Plano Funcional Integrativo": 6000
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência 24 horas": 855
              },
              "Outros": {
                      "Consulta odontológica": 600
              },
              "Harmonização facial": {
                      "Ultraformer III - Full face + pescoço (sem papada)": 7500,
                      "Toxina botulínica (botox)": 3360.01
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 3,
      mesNome: 'Março',
      totalVendas: 71227.50,
      totalPorEspecialidade: {
              "Cirurgia": 1800,
              "Dentística": 7641.930000000001,
              "Endodontia": 1200,
              "Implantodontia": 7600,
              "Ortodontia": 11050,
              "Periodontia": 1900,
              "Prevenção": 21185.57,
              "Prótese": 1800,
              "Urgência": 750,
              "Outros": 4814.9,
              "Harmonização facial": 11485.1
      },
      totalPorTratamento: {
              "Consulta Odontológica de Urgência": 750,
              "Provisório": 1800,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1362.5,
              "Exérese ou Excisão de Cistos Odontológicos": 1800,
              "Preenchimento de mento": 1191.49,
              "Preenchimento de malar": 1900,
              "Rinomodelação": 1900,
              "Restauração em Resina Fotopolimerizável 2 faces": 3315,
              "Restauração em Resina Fotopolimerizável 4 faces": 1050,
              "Coroa Provisória sobre Implante": 1200,
              "Restauração em Resina Fotopolimerizável 1 face": 2176.9300000000003,
              "Hidratação De Olheiras": 1600,
              "Reparo de Resina Composta": 1100,
              "Aplicação de Selante de Fóssulas e Fissuras": 3923.0699999999993,
              "Consulta de Avaliação": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6660,
              "Consulta Odontológica Integrativa": 1200,
              "Plano Funcional Integrativo": 6000,
              "Toxina botulínica (botox)": 4893.61,
              "Coroa Total Metalo Cerâmica sobre Implante": 6400,
              "Manutenção Aparelho Ortopédico": 600,
              "Manutenção Aparelho Expansor": 750,
              "Aparelho Ortopédico Expansor Mandibular": 4200,
              "Bionator de Balters": 5500,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 3314.9,
              "Consulta Inicial": 600,
              "Consulta odontológica": 300,
              "Oxido Nitroso": 600,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1900,
              "Escova Elétrica": 240,
              "Check up Integrativo": 1200
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exérese ou Excisão de Cistos Odontológicos": 1800
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 3315,
                      "Restauração em Resina Fotopolimerizável 4 faces": 1050,
                      "Restauração em Resina Fotopolimerizável 1 face": 2176.9300000000003,
                      "Reparo de Resina Composta": 1100
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1200
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 1200,
                      "Coroa Total Metalo Cerâmica sobre Implante": 6400
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 600,
                      "Manutenção Aparelho Expansor": 750,
                      "Aparelho Ortopédico Expansor Mandibular": 4200,
                      "Bionator de Balters": 5500
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1900
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1362.5,
                      "Aplicação de Selante de Fóssulas e Fissuras": 3923.0699999999993,
                      "Consulta de Avaliação": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 6660,
                      "Consulta Odontológica Integrativa": 1200,
                      "Plano Funcional Integrativo": 6000,
                      "Escova Elétrica": 240,
                      "Check up Integrativo": 1200
              },
              "Prótese": {
                      "Provisório": 1800
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 750
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 3314.9,
                      "Consulta Inicial": 600,
                      "Consulta odontológica": 300,
                      "Oxido Nitroso": 600
              },
              "Harmonização facial": {
                      "Preenchimento de mento": 1191.49,
                      "Preenchimento de malar": 1900,
                      "Rinomodelação": 1900,
                      "Hidratação De Olheiras": 1600,
                      "Toxina botulínica (botox)": 4893.61
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 4,
      mesNome: 'Abril',
      totalVendas: 65560.25,
      totalPorEspecialidade: {
              "Cirurgia": 2250,
              "Dentística": 8736.84,
              "Endodontia": 8229.95,
              "Ortodontia": 150,
              "Periodontia": 2434.99,
              "Prevenção": 20528.41,
              "Prótese": 19880.06,
              "Urgência": 650,
              "Outros": 2700
      },
      totalPorTratamento: {
              "Tratamento Endodôntico Unirradicular": 1330,
              "Exodontia com Odonto-Secção": 900,
              "Pino Pré Fabricado": 2790.01,
              "Manutenção Aparelho Expansor": 150,
              "Reconstrução em Resina Composta Nanoparticulada": 665,
              "Consulta Integrativa Avulsa": 1500,
              "Tratamento Endodôntico de Dente com Rizogênese Incompleta": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2123.16,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
              "Bloco Porcelana Pura": 5220.02,
              "Colagem de Fragmentos Dentários": 650,
              "Pulpotomia": 1200,
              "Retratamento Endodôntico Multirradicular": 4499.95,
              "Coroa Porcelana Pura": 8640.03,
              "Exodontia com Retalho": 900,
              "Aumento de Coroa Clínica": 629.99,
              "Restauração em Resina Fotopolimerizável 2 faces": 4370,
              "Restauração em Resina Fotopolimerizável 3 faces": 945,
              "Restauração em Resina Fotopolimerizável 1 face": 1360,
              "Bloco Cerômero": 3230,
              "Reparo de Resina Composta": 1396.84,
              "Prevenção Odontopediatria": 600,
              "Aplicação de Selante de Fóssulas e Fissuras": 1300,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5050,
              "Consulta Odontológica Integrativa": 3600,
              "Plano Funcional Integrativo": 6000,
              "Exodontia Simples de Decíduo": 450,
              "Condicionamento em Odontologia": 600,
              "Consulta odontológica": 600,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1805,
              "Refil Escova Elétrica": 255.25
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia com Odonto-Secção": 900,
                      "Exodontia com Retalho": 900,
                      "Exodontia Simples de Decíduo": 450
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 4370,
                      "Restauração em Resina Fotopolimerizável 3 faces": 945,
                      "Restauração em Resina Fotopolimerizável 1 face": 1360,
                      "Reparo de Resina Composta": 1396.84,
                      "Reconstrução em Resina Composta Nanoparticulada": 665
              },
              "Endodontia": {
                      "Tratamento Endodôntico Unirradicular": 1330,
                      "Tratamento Endodôntico de Dente com Rizogênese Incompleta": 1200,
                      "Pulpotomia": 1200,
                      "Retratamento Endodôntico Multirradicular": 4499.95
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 150
              },
              "Periodontia": {
                      "Aumento de Coroa Clínica": 629.99,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1805
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2123.16,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
                      "Prevenção Odontopediatria": 600,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1300,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5050,
                      "Consulta Odontológica Integrativa": 3600,
                      "Plano Funcional Integrativo": 6000,
                      "Refil Escova Elétrica": 255.25
              },
              "Prótese": {
                      "Pino Pré Fabricado": 2790.01,
                      "Bloco Porcelana Pura": 5220.02,
                      "Coroa Porcelana Pura": 8640.03,
                      "Bloco Cerômero": 3230
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 650
              },
              "Outros": {
                      "Consulta Integrativa Avulsa": 1500,
                      "Condicionamento em Odontologia": 600,
                      "Consulta odontológica": 600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 5,
      mesNome: 'Maio',
      totalVendas: 66855.00,
      totalPorEspecialidade: {
              "Cirurgia": 3105,
              "Dentística": 25080,
              "Endodontia": 1920,
              "Ortodontia": 500,
              "Periodontia": 1200,
              "Prevenção": 17930,
              "Prótese": 6380,
              "Urgência": 650,
              "Outros": 2970,
              "Harmonização facial": 7120
      },
      totalPorTratamento: {
              "Faceta em Resina Fotopolimerizável": 8460,
              "Provisório": 300,
              "Restauração em Resina Fotopolimerizável 2 faces": 14240,
              "Manutenção de Aparelho Ortodôntico Fixo": 500,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1900,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 3200,
              "Bloco Porcelana Pura": 3200,
              "Colagem de Fragmentos Dentários": 650,
              "Tratamento Endodôntico Multirradicular": 1920,
              "Coroa Porcelana Pura": 2880,
              "Ultraformer III - Papada": 1280,
              "Ultraformer III - Bochechas lifth": 2000,
              "Raspagem de tártaro supra gengival": 950,
              "Profilaxia (limpeza)": 8700,
              "Exodontia Complexa de Decíduo": 855,
              "Seringa clareamento": 200,
              "Restauração em Resina Fotopolimerizável 1 face": 1530,
              "Consulta de Avaliação": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 600,
              "Consulta Odontológica Integrativa": 1980,
              "Exodontia Simples de Decíduo": 1650,
              "Limpeza de coroas sobre implante": 600,
              "Restauração em Ionômero de Vidro - 2 faces": 650,
              "Toxina botulínica (botox)": 3840,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1520,
              "Consulta odontológica": 1450,
              "Raspagem Sub-gengival (RASUB)": 1200
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Complexa de Decíduo": 855,
                      "Exodontia Simples de Decíduo": 1650,
                      "Limpeza de coroas sobre implante": 600
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 8460,
                      "Restauração em Resina Fotopolimerizável 2 faces": 14240,
                      "Seringa clareamento": 200,
                      "Restauração em Resina Fotopolimerizável 1 face": 1530,
                      "Restauração em Ionômero de Vidro - 2 faces": 650
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 1920
              },
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 500
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 1200
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1900,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 3200,
                      "Raspagem de tártaro supra gengival": 950,
                      "Profilaxia (limpeza)": 8700,
                      "Consulta de Avaliação": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 600,
                      "Consulta Odontológica Integrativa": 1980
              },
              "Prótese": {
                      "Provisório": 300,
                      "Bloco Porcelana Pura": 3200,
                      "Coroa Porcelana Pura": 2880
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 650
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1520,
                      "Consulta odontológica": 1450
              },
              "Harmonização facial": {
                      "Ultraformer III - Papada": 1280,
                      "Ultraformer III - Bochechas lifth": 2000,
                      "Toxina botulínica (botox)": 3840
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 6,
      mesNome: 'Junho',
      totalVendas: 44862.50,
      totalPorEspecialidade: {
              "Cirurgia": 3250,
              "Dentística": 5276.25,
              "Implantodontia": 900,
              "Ortodontia": 1200,
              "Periodontia": 701.25,
              "Prevenção": 10445,
              "Prótese": 7300,
              "Urgência": 900,
              "Outros": 650,
              "Harmonização facial": 14240
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 3100,
              "Exodontia Simples de Decíduo": 2200,
              "Ultraformer III - Bochechas lifth": 4500,
              "Manutenção de Aparelho Ortodôntico Fixo": 625,
              "Provisório": 600,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 650,
              "Bloco Porcelana Pura": 2900,
              "Bioestimulador Sculptra": 2880,
              "Ultraformer III - Papada": 1600,
              "Raspagem de tártaro supra gengival": 855,
              "Profilaxia (limpeza)": 2940,
              "Restauração em Resina Fotopolimerizável 2 faces": 2126.25,
              "Restauração em Resina Fotopolimerizável 3 faces": 3150,
              "Prótese Parcial Removível Provisória (PPR)": 3800,
              "Prevenção Odontopediatria": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 600,
              "Consulta Odontológica Integrativa": 4800,
              "Lavieen 3 sessões": 2160,
              "Frenectomia Lingual Laser Cirurgico": 1050,
              "Pilar protético sobre implante": 900,
              "Manutenção Aparelho Expansor": 575,
              "Oxido Nitroso": 650,
              "Raspagem Supra-gengival (RAP) - Limpeza": 701.25,
              "Infiltrativa na região DTM": 900
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 2200,
                      "Frenectomia Lingual Laser Cirurgico": 1050
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 2126.25,
                      "Restauração em Resina Fotopolimerizável 3 faces": 3150
              },
              "Implantodontia": {
                      "Pilar protético sobre implante": 900
              },
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 625,
                      "Manutenção Aparelho Expansor": 575
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 701.25
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 650,
                      "Raspagem de tártaro supra gengival": 855,
                      "Profilaxia (limpeza)": 2940,
                      "Prevenção Odontopediatria": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 600,
                      "Consulta Odontológica Integrativa": 4800
              },
              "Prótese": {
                      "Provisório": 600,
                      "Bloco Porcelana Pura": 2900,
                      "Prótese Parcial Removível Provisória (PPR)": 3800
              },
              "Urgência": {
                      "Infiltrativa na região DTM": 900
              },
              "Outros": {
                      "Oxido Nitroso": 650
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 3100,
                      "Ultraformer III - Bochechas lifth": 4500,
                      "Bioestimulador Sculptra": 2880,
                      "Ultraformer III - Papada": 1600,
                      "Lavieen 3 sessões": 2160
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 7,
      mesNome: 'Julho',
      totalVendas: 39122.50,
      totalPorEspecialidade: {
              "Cirurgia": 1650,
              "Dentística": 5254.98,
              "Endodontia": 4179.99,
              "Ortodontia": 1000,
              "Periodontia": 550,
              "Prevenção": 18147.53,
              "Prótese": 2800,
              "Urgência": 650,
              "Outros": 550,
              "Harmonização facial": 4340
      },
      totalPorTratamento: {
              "Escova Elétrica": 360,
              "Coroa Cerômero": 1800,
              "Exodontia Simples de Permanente": 600,
              "Manutenção Aparelho Expansor": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 12000,
              "Refil Escova Elétrica": 135,
              "Consulta Odontológica de Urgência": 650,
              "Manutenção de Aparelho Ortodôntico Fixo": 400,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2667.68,
              "Pino Pré Fabricado": 1000,
              "Tratamento Endodôntico Multirradicular": 2279.99,
              "Tratamento Endodôntico Birradicular": 1900,
              "Preenchimento labial": 175,
              "Profilaxia (limpeza)": 1084.85,
              "Restauração em Resina Fotopolimerizável 1 face": 5254.98,
              "Consulta Odontológica Integrativa": 600,
              "Plano Funcional Integrativo": 1300,
              "Lavieen 3 sessões": 765,
              "Exodontia Simples de Decíduo": 600,
              "Ulectomia": 450,
              "Toxina botulínica (botox)": 3400,
              "Condicionamento em Odontologia": 550,
              "Ajuste Oclusal por desgaste": 550
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 600,
                      "Exodontia Simples de Decíduo": 600,
                      "Ulectomia": 450
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 5254.98
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 2279.99,
                      "Tratamento Endodôntico Birradicular": 1900
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 600,
                      "Manutenção de Aparelho Ortodôntico Fixo": 400
              },
              "Periodontia": {
                      "Ajuste Oclusal por desgaste": 550
              },
              "Prevenção": {
                      "Escova Elétrica": 360,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 12000,
                      "Refil Escova Elétrica": 135,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2667.68,
                      "Profilaxia (limpeza)": 1084.85,
                      "Consulta Odontológica Integrativa": 600,
                      "Plano Funcional Integrativo": 1300
              },
              "Prótese": {
                      "Coroa Cerômero": 1800,
                      "Pino Pré Fabricado": 1000
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 650
              },
              "Outros": {
                      "Condicionamento em Odontologia": 550
              },
              "Harmonização facial": {
                      "Preenchimento labial": 175,
                      "Lavieen 3 sessões": 765,
                      "Toxina botulínica (botox)": 3400
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 8,
      mesNome: 'Agosto',
      totalVendas: 162005.00,
      totalPorEspecialidade: {
              "Cirurgia": 8094.17,
              "Dentística": 10207.35,
              "Endodontia": 1800,
              "Implantodontia": 31500,
              "Ortodontia": 925,
              "Periodontia": 1500,
              "Prevenção": 10297.5,
              "Prótese": 89600,
              "Urgência": 2200,
              "Outros": 3315.98,
              "Harmonização facial": 2565
      },
      totalPorTratamento: {
              "Tratamento Endodôntico Birradicular": 1800,
              "Consulta odontológica": 400,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1500,
              "Refil Escova Elétrica": 60,
              "Colagem Contenção Fixa": 800,
              "Manutenção de Aparelho Ortodôntico Fixo": 125,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 600,
              "Raspagem de tártaro supra gengival": 770,
              "Faceta em Resina Fotopolimerizável": 2900,
              "Consulta,checkup digital,profilaxia": 200,
              "Clareamento Dentário Caseiro": 500,
              "Guia Cirúrgico para Implante": 4500,
              "Prótese Total Imediata (PT)": 9000,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1757.5,
              "Bloco Porcelana Pura": 11600,
              "Colagem de Fragmentos Dentários": 1600,
              "Exodontia Simples de Permanente": 5265,
              "Prótese Protocolo Cerâmico": 63000,
              "Profilaxia (limpeza)": 1110,
              "Restauração em Resina Fotopolimerizável 2 faces": 2704.85,
              "Restauração em Resina Fotopolimerizável 1 face": 850,
              "Reparo de Resina Composta": 3052.5,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5400,
              "Consulta Odontológica Integrativa": 600,
              "Lavieen 3 sessões": 765,
              "Exodontia Simples de Decíduo": 1050,
              "Frenectomia Lingual Laser Cirurgico": 1779.17,
              "Toxina botulínica (botox)": 1800,
              "Cirurgia de Implantes Mandíbula Carga Imediata": 13500,
              "Cirurgia de Implantes Maxila Técnica Hallonford": 13500,
              "Laser Terapia": 1800,
              "Oxido Nitroso": 1115.98,
              "Lente Porcelana Pura": 6000,
              "Consulta Odontológica de Urgência": 600
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 5265,
                      "Exodontia Simples de Decíduo": 1050,
                      "Frenectomia Lingual Laser Cirurgico": 1779.17
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 2704.85,
                      "Restauração em Resina Fotopolimerizável 1 face": 850,
                      "Reparo de Resina Composta": 3052.5,
                      "Faceta em Resina Fotopolimerizável": 2900,
                      "Consulta,checkup digital,profilaxia": 200,
                      "Clareamento Dentário Caseiro": 500
              },
              "Endodontia": {
                      "Tratamento Endodôntico Birradicular": 1800
              },
              "Implantodontia": {
                      "Guia Cirúrgico para Implante": 4500,
                      "Cirurgia de Implantes Mandíbula Carga Imediata": 13500,
                      "Cirurgia de Implantes Maxila Técnica Hallonford": 13500
              },
              "Ortodontia": {
                      "Colagem Contenção Fixa": 800,
                      "Manutenção de Aparelho Ortodôntico Fixo": 125
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1500
              },
              "Prevenção": {
                      "Refil Escova Elétrica": 60,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1757.5,
                      "Raspagem de tártaro supra gengival": 770,
                      "Profilaxia (limpeza)": 1110,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 5400,
                      "Consulta Odontológica Integrativa": 600,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 600
              },
              "Prótese": {
                      "Prótese Total Imediata (PT)": 9000,
                      "Bloco Porcelana Pura": 11600,
                      "Prótese Protocolo Cerâmico": 63000,
                      "Lente Porcelana Pura": 6000
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 1600,
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Consulta odontológica": 400,
                      "Laser Terapia": 1800,
                      "Oxido Nitroso": 1115.98
              },
              "Harmonização facial": {
                      "Lavieen 3 sessões": 765,
                      "Toxina botulínica (botox)": 1800
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 9,
      mesNome: 'Setembro',
      totalVendas: 36370.00,
      totalPorEspecialidade: {
              "Cirurgia": 600,
              "Dentística": 8950,
              "Endodontia": 300,
              "Ortodontia": 1350,
              "Periodontia": 850,
              "Prevenção": 10960,
              "Prótese": 8810,
              "Urgência": 850,
              "Outros": 1300,
              "Harmonização facial": 2400
      },
      totalPorTratamento: {
              "Faceta em Resina Fotopolimerizável": 4850,
              "Consulta odontológica": 1300,
              "Consulta Odontológica de Urgência": 850,
              "Seringa clareamento": 200,
              "Retratamento Endodôntico Unirradicular": 300,
              "Coroa Cerômero": 500,
              "Restauração em Resina Fotopolimerizável 1 face": 1400,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1050,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 3200,
              "Profilaxia (limpeza)": 800,
              "Clareamento Dentário Caseiro": 800,
              "Restauração em Resina Fotopolimerizável 2 faces": 950,
              "Reparo de Resina Composta": 250,
              "Aparelho Expansor Hyrax": 1000,
              "Prevenção Odontopediatria": 540,
              "Consulta de Avaliação": 1200,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 2970,
              "Sessão Terapia a Laser": 1200,
              "Reconstrução em Resina Composta Nanoparticulada": 500,
              "Exodontia Simples de Decíduo": 600,
              "Toxina botulínica (botox)": 2400,
              "Manutenção Aparelho Ortopédico": 350,
              "Raspagem Supra-gengival (RAP) - Limpeza": 850,
              "Faceta em Cerâmica Pura": 8310
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 600
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 4850,
                      "Clareamento Dentário Caseiro": 800,
                      "Restauração em Resina Fotopolimerizável 2 faces": 950,
                      "Restauração em Resina Fotopolimerizável 1 face": 1400,
                      "Reparo de Resina Composta": 250,
                      "Seringa clareamento": 200,
                      "Reconstrução em Resina Composta Nanoparticulada": 500
              },
              "Endodontia": {
                      "Retratamento Endodôntico Unirradicular": 300
              },
              "Ortodontia": {
                      "Aparelho Expansor Hyrax": 1000,
                      "Manutenção Aparelho Ortopédico": 350
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 850
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1050,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 3200,
                      "Profilaxia (limpeza)": 800,
                      "Prevenção Odontopediatria": 540,
                      "Consulta de Avaliação": 1200,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 2970,
                      "Sessão Terapia a Laser": 1200
              },
              "Prótese": {
                      "Coroa Cerômero": 500,
                      "Faceta em Cerâmica Pura": 8310
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 850
              },
              "Outros": {
                      "Consulta odontológica": 1300
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 2400
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 10,
      mesNome: 'Outubro',
      totalVendas: 89417.50,
      totalPorEspecialidade: {
              "Cirurgia": 6640,
              "Dentística": 37131.72,
              "Endodontia": 2400,
              "Periodontia": 1400,
              "Prevenção": 21875.78,
              "Prótese": 8800,
              "Testes e exames laboratoriais": 1200,
              "Urgência": 1300,
              "Outros": 1710,
              "Harmonização facial": 6960
      },
      totalPorTratamento: {
              "Faceta em Resina Fotopolimerizável": 2550,
              "Placa protetora oclusal": 600,
              "Restauração em Resina Fotopolimerizável 2 faces": 7650,
              "Coroa Cerômero": 1000,
              "Aplicação de Selante de Fóssulas e Fissuras": 750,
              "Colagem de Fragmentos Dentários": 1000,
              "Exodontia de Dentes Inclusos / Impactados": 1500,
              "Restauração em Resina Fotopolimerizável 1 face": 15906.72,
              "Raspagem Sub-gengival (RASUB)": 250,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7700,
              "Reparo de Resina Composta": 600,
              "Profilaxia (limpeza)": 4403.85,
              "Raspagem de tártaro supra gengival": 1275,
              "Bloco Porcelana Pura": 650,
              "Seringa clareamento": 200,
              "Consulta,checkup digital,profilaxia": 125,
              "Exodontia Simples de Permanente": 100,
              "Clareamento Dentário Caseiro": 2000,
              "Diagnóstico por Meio de Enceramento": 1200,
              "Tratamento de Fluorose - microabrasão": 350,
              "Raspagem Supra-gengival (RAP) - Limpeza": 300,
              "Consulta Odontológica de Urgência": 300,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4926.93,
              "Tratamento Endodôntico em Dente Decíduo": 2400,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 200,
              "Pino Pré Fabricado": 150,
              "Coroa Porcelana Pura": 6400,
              "Clareamento Associado": 3900,
              "Gengivectomia": 500,
              "Restauração em Resina Fotopolimerizável 3 faces": 4200,
              "Consulta Odontológica Integrativa": 2400,
              "Exodontia Simples de Decíduo": 1050,
              "Frenectomia Lingual Laser Cirurgico": 1890,
              "Frenectomia Labial Laser Cirurgico": 2100,
              "Toxina botulínica (botox)": 6960,
              "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1710,
              "Escova Elétrica": 220
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia de Dentes Inclusos / Impactados": 1500,
                      "Exodontia Simples de Permanente": 100,
                      "Exodontia Simples de Decíduo": 1050,
                      "Frenectomia Lingual Laser Cirurgico": 1890,
                      "Frenectomia Labial Laser Cirurgico": 2100
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 2550,
                      "Restauração em Resina Fotopolimerizável 2 faces": 7650,
                      "Restauração em Resina Fotopolimerizável 1 face": 15906.720000000001,
                      "Reparo de Resina Composta": 600,
                      "Clareamento Associado": 3900,
                      "Clareamento Dentário Caseiro": 2000,
                      "Restauração em Resina Fotopolimerizável 3 faces": 4200,
                      "Seringa clareamento": 200,
                      "Consulta,checkup digital,profilaxia": 125
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 2400
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 250,
                      "Gengivectomia": 500,
                      "Tratamento de Fluorose - microabrasão": 350,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 300
              },
              "Prevenção": {
                      "Aplicação de Selante de Fóssulas e Fissuras": 750,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 7700,
                      "Profilaxia (limpeza)": 4403.85,
                      "Raspagem de tártaro supra gengival": 1275,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4926.93,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 200,
                      "Consulta Odontológica Integrativa": 2400,
                      "Escova Elétrica": 220
              },
              "Prótese": {
                      "Placa protetora oclusal": 600,
                      "Coroa Cerômero": 1000,
                      "Pino Pré Fabricado": 150,
                      "Coroa Porcelana Pura": 6400,
                      "Bloco Porcelana Pura": 650
              },
              "Testes e exames laboratoriais": {
                      "Diagnóstico por Meio de Enceramento": 1200
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 1000,
                      "Consulta Odontológica de Urgência": 300
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 1710
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 6960
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 11,
      mesNome: 'Novembro',
      totalVendas: 87989.50,
      totalPorEspecialidade: {
              "Cirurgia": 4290,
              "Dentística": 27412.5,
              "Endodontia": 800,
              "Ortodontia": 2075,
              "Periodontia": 3750,
              "Prevenção": 19060,
              "Prótese": 10500,
              "Urgência": 375,
              "Outros": 2850,
              "Harmonização facial": 16877
      },
      totalPorTratamento: {
              "Braquete Estético": 250,
              "Toxina botulínica (botox)": 7702,
              "Restauração em Resina Fotopolimerizável 2 faces": 9212.5,
              "Colagem de Fragmentos Dentários": 375,
              "Exodontia Simples de Decíduo": 900,
              "Restauração em Ionômero de Vidro - 2 faces": 100,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1400,
              "Bloco Cerômero": 3500,
              "Paciente Modelo Preenchimento mento 1 ml": 1100,
              "Polimento Dentário": 100,
              "Manutenção de Aparelho Ortodôntico Fixo": 625,
              "Restauração em Resina Fotopolimerizável 1 face": 2475,
              "Faceta em Resina Fotopolimerizável": 10850,
              "Clareamento Dentário Caseiro": 2400,
              "Restauração ponta de dente": 500,
              "Profilaxia (limpeza)": 2780,
              "Raspagem de tártaro supra gengival": 1050,
              "Raspagem Sub-gengival (RASUB)": 1150,
              "Prevenção Odontopediatria": 4200,
              "Exodontia Simples de Permanente": 300,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3130,
              "Faceta em Cerâmica Pura": 6000,
              "Retratamento Endodôntico Unirradicular": 800,
              "Ajuste e reembasamento aparelho ortopédico": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
              "Preenchimento de mento": 1425,
              "Preenchimento de mandíbula": 1425,
              "Preenchimento de malar": 1424.99,
              "Clareamento em Consultório": 300,
              "Placa de mordida miorelaxante": 1200,
              "Restauração resina dente de leite": 100,
              "Hidratação De Olheiras": 1200.01,
              "Reparo de Resina Composta": 1375,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4500,
              "Sessão Terapia a Laser": 600,
              "Consulta Odontológica Integrativa": 1200,
              "Botox para Bruxismo e Briquismo": 2500,
              "Ulectomia Laser": 1200,
              "Frenectomia Lingual Laser Cirurgico": 1890,
              "Unidade Toxina Botulínica ( botox)": 100,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1350,
              "Consulta odontológica": 600,
              "Oxido Nitroso": 900,
              "Prótese Total (PT)": 1000
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 900,
                      "Ulectomia Laser": 1200,
                      "Exodontia Simples de Permanente": 300,
                      "Frenectomia Lingual Laser Cirurgico": 1890
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 9212.5,
                      "Restauração em Ionômero de Vidro - 2 faces": 100,
                      "Faceta em Resina Fotopolimerizável": 10850,
                      "Clareamento Dentário Caseiro": 2400,
                      "Clareamento em Consultório": 300,
                      "Restauração em Resina Fotopolimerizável 1 face": 2475,
                      "Restauração resina dente de leite": 100,
                      "Reparo de Resina Composta": 1375,
                      "Restauração ponta de dente": 500,
                      "Polimento Dentário": 100
              },
              "Endodontia": {
                      "Retratamento Endodôntico Unirradicular": 800
              },
              "Ortodontia": {
                      "Braquete Estético": 250,
                      "Ajuste e reembasamento aparelho ortopédico": 1200,
                      "Manutenção de Aparelho Ortodôntico Fixo": 625
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1400,
                      "Placa de mordida miorelaxante": 1200,
                      "Raspagem Sub-gengival (RASUB)": 1150
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3130,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
                      "Raspagem de tártaro supra gengival": 1050,
                      "Profilaxia (limpeza)": 2780,
                      "Prevenção Odontopediatria": 4200,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 4500,
                      "Sessão Terapia a Laser": 600,
                      "Consulta Odontológica Integrativa": 1200
              },
              "Prótese": {
                      "Bloco Cerômero": 3500,
                      "Faceta em Cerâmica Pura": 6000,
                      "Prótese Total (PT)": 1000
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 375
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1350,
                      "Consulta odontológica": 600,
                      "Oxido Nitroso": 900
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 7702,
                      "Paciente Modelo Preenchimento mento 1 ml": 1100,
                      "Preenchimento de mento": 1425,
                      "Preenchimento de mandíbula": 1425,
                      "Preenchimento de malar": 1424.99,
                      "Hidratação De Olheiras": 1200.01,
                      "Botox para Bruxismo e Briquismo": 2500,
                      "Unidade Toxina Botulínica ( botox)": 100
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2024,
      mes: 12,
      mesNome: 'Dezembro',
      totalVendas: 161200.00,
      totalPorEspecialidade: {
              "Cirurgia": 775,
              "Dentística": 24222.14,
              "Endodontia": 2500,
              "Implantodontia": 3600,
              "Ortodontia": 350,
              "Periodontia": 5550,
              "Prevenção": 20795.16,
              "Prótese": 79520.61999999998,
              "Urgência": 1850,
              "Outros": 16359.61,
              "Harmonização facial": 5677.47
      },
      totalPorTratamento: {
              "Laser Terapia": 1800,
              "Faceta em Resina Fotopolimerizável": 17134.539999999994,
              "Toxina botulínica (botox)": 5577.47,
              "Restauração em Resina Fotopolimerizável 2 faces": 2000,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4577.23,
              "Aplicação de Selante de Fóssulas e Fissuras": 1150,
              "Manutenção Aparelho Ortopédico": 350,
              "Colagem de Fragmentos Dentários": 650,
              "Restauração em Resina Fotopolimerizável 1 face": 2198.16,
              "Consulta odontológica": 600,
              "Raspagem Supra-gengival (RAP) - Limpeza": 950,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 1200,
              "Profilaxia (limpeza)": 4001.48,
              "Clareamento Dentário Caseiro": 1195.07,
              "Sessão Clareamento em Consultório": 400,
              "Bloco Porcelana Pura": 40934.82,
              "Seringa clareamento": 200,
              "Raspagem de tártaro supra gengival": 2036.62,
              "Coroa Total Metalo Cerâmica sobre Implante": 3600,
              "Placa de mordida miorelaxante": 600,
              "Prevenção Odontopediatria": 5270,
              "Polimento Dentário": 394.37,
              "Pulpectomia": 2500,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1359.83,
              "Coroa Porcelana Pura": 3200,
              "Exodontia Simples de Permanente": 325,
              "Restauração em Resina Fotopolimerizável 4 faces": 150,
              "Bloco Cerômero": 1900,
              "Reparo de Resina Composta": 550,
              "Consulta Odontológica Integrativa": 1200,
              "Terapia Neural": 10259.61,
              "Exodontia Simples de Decíduo": 450,
              "Unidade Toxina Botulínica ( botox)": 100,
              "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1800,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1900,
              "Raspagem Sub-gengival (RASUB)": 4000,
              "Faceta em Cerâmica Pura": 32635.800000000007,
              "Prótese Total (PT)": 850,
              "Consulta Odontológica de Urgência": 1200
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 325,
                      "Exodontia Simples de Decíduo": 450
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 17134.54,
                      "Polimento Dentário": 394.37,
                      "Restauração em Resina Fotopolimerizável 2 faces": 2000,
                      "Restauração em Resina Fotopolimerizável 1 face": 2198.16,
                      "Restauração em Resina Fotopolimerizável 4 faces": 150,
                      "Reparo de Resina Composta": 550,
                      "Clareamento Dentário Caseiro": 1195.07,
                      "Sessão Clareamento em Consultório": 400,
                      "Seringa clareamento": 200
              },
              "Endodontia": {
                      "Pulpectomia": 2500
              },
              "Implantodontia": {
                      "Coroa Total Metalo Cerâmica sobre Implante": 3600
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 350
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 950,
                      "Placa de mordida miorelaxante": 600,
                      "Raspagem Sub-gengival (RASUB)": 4000
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4577.23,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1150,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 1200,
                      "Profilaxia (limpeza)": 4001.48,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1359.83,
                      "Raspagem de tártaro supra gengival": 2036.62,
                      "Prevenção Odontopediatria": 5270,
                      "Consulta Odontológica Integrativa": 1200
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 40934.82,
                      "Coroa Porcelana Pura": 3200,
                      "Bloco Cerômero": 1900,
                      "Faceta em Cerâmica Pura": 32635.800000000007,
                      "Prótese Total (PT)": 850
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 650,
                      "Consulta Odontológica de Urgência": 1200
              },
              "Outros": {
                      "Laser Terapia": 1800,
                      "Consulta odontológica": 600,
                      "Terapia Neural": 10259.61,
                      "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 1800,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1900
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 5577.47,
                      "Unidade Toxina Botulínica ( botox)": 100
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 1,
      mesNome: 'Janeiro',
      totalVendas: 50050.00,
      totalPorEspecialidade: {
              "Cirurgia": 1500,
              "Dentística": 8600,
              "Endodontia": 2550,
              "Implantodontia": 300,
              "Prevenção": 20300,
              "Prótese": 6850,
              "Urgência": 2850,
              "Outros": 4150,
              "Harmonização facial": 2950
      },
      totalPorTratamento: {
              "Limpeza e Manutenção da Prótese Protocolo": 1200,
              "Bloco Porcelana Pura": 3500,
              "Sessão Terapia a Laser": 1200,
              "Profilaxia (limpeza)": 6890,
              "Restauração em Resina Fotopolimerizável 2 faces": 2400,
              "Tratamento Endodôntico Multirradicular": 700,
              "Torque coroa sobre implante": 300,
              "Prevenção Odontopediatria": 4130,
              "Bloco Cerômero": 2150,
              "Faceta em Resina Fotopolimerizável": 4500,
              "Pulpectomia": 1200,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 950,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
              "Colagem de Fragmentos Dentários": 1950,
              "Raspagem de tártaro supra gengival": 950,
              "Restauração em Resina Fotopolimerizável 1 face": 1700,
              "Curativo de Demora": 650,
              "Placa de Bruxismo Infantil": 1600,
              "Aplicação de Selante de Fóssulas e Fissuras": 1530,
              "Consulta Odontológica Integrativa": 1200,
              "Frenectomia lingual Tesoura": 600,
              "Exodontia Simples de Decíduo": 900,
              "Toxina botulínica (botox)": 2950,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 3750,
              "Consulta odontológica": 400,
              "Escova Elétrica": 250,
              "Hora clínica de Urgência": 900
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Frenectomia lingual Tesoura": 600,
                      "Exodontia Simples de Decíduo": 900
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 2400,
                      "Restauração em Resina Fotopolimerizável 1 face": 1700,
                      "Faceta em Resina Fotopolimerizável": 4500
              },
              "Endodontia": {
                      "Pulpectomia": 1200,
                      "Curativo de Demora": 650,
                      "Tratamento Endodôntico Multirradicular": 700
              },
              "Implantodontia": {
                      "Torque coroa sobre implante": 300
              },
              "Prevenção": {
                      "Sessão Terapia a Laser": 1200,
                      "Profilaxia (limpeza)": 6890,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 950,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
                      "Raspagem de tártaro supra gengival": 950,
                      "Placa de Bruxismo Infantil": 1600,
                      "Prevenção Odontopediatria": 4130,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1530,
                      "Consulta Odontológica Integrativa": 1200,
                      "Escova Elétrica": 250
              },
              "Prótese": {
                      "Limpeza e Manutenção da Prótese Protocolo": 1200,
                      "Bloco Porcelana Pura": 3500,
                      "Bloco Cerômero": 2150
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 1950,
                      "Hora clínica de Urgência": 900
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 3750,
                      "Consulta odontológica": 400
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 2950
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 2,
      mesNome: 'Fevereiro',
      totalVendas: 101945.00,
      totalPorEspecialidade: {
              "Cirurgia": 1600,
              "Dentística": 11270,
              "Endodontia": 5900,
              "Implantodontia": 19440,
              "Ortodontia": 5500,
              "Periodontia": 5000,
              "Prevenção": 21935.67,
              "Prótese": 17543.440000000002,
              "Urgência": 1550,
              "Outros": 10080.22,
              "Harmonização facial": 2125.67
      },
      totalPorTratamento: {
              "Implante Ortodôntico": 1500,
              "Restauração em Resina Fotopolimerizável 2 faces": 3800,
              "Colagem de Fragmentos Dentários": 950,
              "Restauração em Resina Fotopolimerizável 1 face": 5220,
              "Consulta odontológica": 900,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1200,
              "Contenção Fixa Estética": 3500,
              "Profilaxia (limpeza)": 8371.74,
              "Manutenção de Aparelho Ortodôntico Fixo": 500,
              "Myobrace": 1500,
              "Soro Terapia": 2500,
              "Protocolo inferior": 13840,
              "Coroa Cerômero": 500,
              "Prótese Total (PT)": 910,
              "Exodontia Simples de Permanente": 1450,
              "Prótese Fixa Adesiva Indireta em Metalo-Plástica 3 elementos": 7000,
              "Exodontia com Retalho": 150,
              "Coroa Total Metalo Cerâmica sobre Implante": 900,
              "Instalação de Implante Ósseo Integrado": 3200,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2850,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 4800,
              "Bloco Porcelana Pura": 2481.27,
              "Tratamento Endodôntico Multirradicular": 2400,
              "IOIS Cursos - Botox e Preenchedores": 500,
              "Hidratação Subdérmica com Ácido Hialurônico": 1625.67,
              "Raspagem de tártaro supra gengival": 1638.93,
              "Prótese Provisória Adesiva com Grampo de Orto": 1000,
              "Placa de mordida miorelaxante": 3800,
              "Sessão Clareamento em Consultório": 600,
              "Reparo de Resina Composta": 1650,
              "Prevenção Odontopediatria": 510,
              "Aplicação de Selante de Fóssulas e Fissuras": 1200,
              "Terapia Neural": 6680.219999999999,
              "Tratamento Endodôntico com Dilaceração e Calcificação Pulpar": 3500,
              "Terapia Endovenosa": 2500,
              "Refil Escova Elétrica": 65,
              "Coroa Sobre Implante de Zirconia": 5652.17,
              "Consulta Odontológica de Urgência": 600
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 1450,
                      "Exodontia com Retalho": 150
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 3800,
                      "Restauração em Resina Fotopolimerizável 1 face": 5220,
                      "Sessão Clareamento em Consultório": 600,
                      "Reparo de Resina Composta": 1650
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 2400,
                      "Tratamento Endodôntico com Dilaceração e Calcificação Pulpar": 3500
              },
              "Implantodontia": {
                      "Implante Ortodôntico": 1500,
                      "Protocolo inferior": 13840,
                      "Coroa Total Metalo Cerâmica sobre Implante": 900,
                      "Instalação de Implante Ósseo Integrado": 3200
              },
              "Ortodontia": {
                      "Contenção Fixa Estética": 3500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 500,
                      "Myobrace": 1500
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1200,
                      "Placa de mordida miorelaxante": 3800
              },
              "Prevenção": {
                      "Profilaxia (limpeza)": 8371.74,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2850,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 4800,
                      "Raspagem de tártaro supra gengival": 1638.93,
                      "Prevenção Odontopediatria": 510,
                      "Aplicação de Selante de Fóssulas e Fissuras": 1200,
                      "Soro Terapia": 2500,
                      "Refil Escova Elétrica": 65
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 2481.27,
                      "Prótese Provisória Adesiva com Grampo de Orto": 1000,
                      "Coroa Cerômero": 500,
                      "Prótese Total (PT)": 910,
                      "Prótese Fixa Adesiva Indireta em Metalo-Plástica 3 elementos": 7000,
                      "Coroa Sobre Implante de Zirconia": 5652.17
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 950,
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Consulta odontológica": 900,
                      "Terapia Neural": 6680.219999999999,
                      "Terapia Endovenosa": 2500
              },
              "Harmonização facial": {
                      "IOIS Cursos - Botox e Preenchedores": 500,
                      "Hidratação Subdérmica com Ácido Hialurônico": 1625.67
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 3,
      mesNome: 'Março',
      totalVendas: 96220.00,
      totalPorEspecialidade: {
              "Cirurgia": 3040.7599999999998,
              "Dentística": 13991.37,
              "Endodontia": 5438.4,
              "Implantodontia": 30495.620000000017,
              "Ortodontia": 4150,
              "Prevenção": 16445.29,
              "Prótese": 21458.559999999998,
              "Urgência": 600,
              "Outros": 600
      },
      totalPorTratamento: {
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4737.25,
              "Prótese Parcial Removível Provisória (PPR)": 846.63,
              "Profilaxia (limpeza)": 4131.42,
              "Cirurgia Odontológica com Aplicação de Aloenxertos": 900,
              "Faceta em Resina Fotopolimerizável": 2514.2,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 3026.62,
              "Bloco Porcelana Pura": 11600,
              "Coroa Cerômero": 755.91,
              "Pino Pré Fabricado": 362.84,
              "Retratamento Endodôntico Multirradicular": 4539.92,
              "Coroa Porcelana Pura": 2972.83,
              "Exodontia Simples de Permanente": 1540.7599999999998,
              "Raspagem de tártaro supra gengival": 950,
              "Restauração em Resina Fotopolimerizável 2 faces": 6650,
              "Restauração em Resina Fotopolimerizável 3 faces": 945,
              "Prótese Fixa Adesiva Direta (provisória)": 585.37,
              "Restauração em Resina Fotopolimerizável 1 face": 2040,
              "Curativo de Demora": 898.48,
              "Reparo de Resina Composta": 1842.17,
              "Aparelho Expansor Hass": 3600,
              "Aplicação de Selante de Fóssulas e Fissuras": 600,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 3000,
              "Frenectomia lingual Tesoura": 600,
              "Coroa Resina sobre implante PMMA": 7559.099999999999,
              "Exodontia Simples de Decíduo": 900,
              "Protocolo superior": 7317.08,
              "Instalação de Implante Ósseo Integrado": 14719.439999999993,
              "Manutenção Aparelho Expansor": 550,
              "Consulta odontológica": 600,
              "Faceta em Cerâmica Pura": 3200,
              "Provisório para Faceta": 1134.98,
              "Consulta Odontológica de Urgência": 600
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 1540.7599999999998,
                      "Frenectomia lingual Tesoura": 600,
                      "Exodontia Simples de Decíduo": 900
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 2514.2,
                      "Restauração em Resina Fotopolimerizável 2 faces": 6650,
                      "Restauração em Resina Fotopolimerizável 3 faces": 945,
                      "Restauração em Resina Fotopolimerizável 1 face": 2040,
                      "Reparo de Resina Composta": 1842.17
              },
              "Endodontia": {
                      "Retratamento Endodôntico Multirradicular": 4539.92,
                      "Curativo de Demora": 898.48
              },
              "Implantodontia": {
                      "Cirurgia Odontológica com Aplicação de Aloenxertos": 900,
                      "Coroa Resina sobre implante PMMA": 7559.099999999999,
                      "Protocolo superior": 7317.08,
                      "Instalação de Implante Ósseo Integrado": 14719.439999999993
              },
              "Ortodontia": {
                      "Aparelho Expansor Hass": 3600,
                      "Manutenção Aparelho Expansor": 550
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 4737.25,
                      "Profilaxia (limpeza)": 4131.42,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 3026.62,
                      "Raspagem de tártaro supra gengival": 950,
                      "Aplicação de Selante de Fóssulas e Fissuras": 600,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 3000
              },
              "Prótese": {
                      "Prótese Parcial Removível Provisória (PPR)": 846.63,
                      "Bloco Porcelana Pura": 11600,
                      "Coroa Cerômero": 755.91,
                      "Pino Pré Fabricado": 362.84,
                      "Coroa Porcelana Pura": 2972.83,
                      "Prótese Fixa Adesiva Direta (provisória)": 585.37,
                      "Faceta em Cerâmica Pura": 3200,
                      "Provisório para Faceta": 1134.98
              },
              "Urgência": {
                      "Consulta Odontológica de Urgência": 600
              },
              "Outros": {
                      "Consulta odontológica": 600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 4,
      mesNome: 'Abril',
      totalVendas: 102885.00,
      totalPorEspecialidade: {
              "Cirurgia": 1990,
              "Dentística": 35625,
              "Endodontia": 7160,
              "Implantodontia": 1200,
              "Ortodontia": 11800,
              "Periodontia": 300,
              "Prevenção": 26030,
              "Prótese": 17380,
              "Urgência": 150,
              "Outros": 1250
      },
      totalPorTratamento: {
              "Coroa Provisória sobre Implante": 1200,
              "Exodontia Simples de Decíduo": 990,
              "Raspagem Supra-gengival (RAP) - Limpeza": 300,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 800,
              "Sessão Terapia a Laser": 1800,
              "Profilaxia (limpeza)": 4155.26,
              "Manutenção de Aparelho Ortodôntico Fixo": 500,
              "Soro Terapia": 750,
              "Coenzima Q10 100mg/2ml IM": 300,
              "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 300,
              "Vitamina C 444mg/2 ml": 300,
              "Procaína IM/EV 40mg/2ml": 5000,
              "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1500,
              "Metilcobalamina B12 2500mcg/2ml IM/EV": 400,
              "Restauração em Resina Fotopolimerizável 1 face": 3850,
              "Enxerto Conjuntivo Subepitelial": 600,
              "Coroa Porcelana Pura": 10750,
              "Raspagem de tártaro supra gengival": 250,
              "Coroa Cerômero": 550,
              "Pino Pré Fabricado": 250,
              "Remoção de Material Obturador": 1550,
              "Tratamento Endodôntico em Dente Decíduo": 2160,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3300,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 7174.74,
              "Bloco Porcelana Pura": 2900,
              "Colagem de Fragmentos Dentários": 150,
              "Retratamento Endodôntico Multirradicular": 2500,
              "Faceta em Resina Fotopolimerizável": 30000,
              "Restauração em Resina Fotopolimerizável 2 faces": 950,
              "Curativo de Demora": 950,
              "Bloco Cerômero": 1980,
              "Restauração ponta de dente": 825,
              "Cirurgia com retalho osteotomia e remoção de supranumerário": 400,
              "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 10700,
              "Manutenção Aparelho Expansor": 600,
              "Oxido Nitroso": 1250,
              "Provisório para Faceta": 950
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 990,
                      "Cirurgia com retalho osteotomia e remoção de supranumerário": 400,
                      "Enxerto Conjuntivo Subepitelial": 600
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 30000,
                      "Restauração em Resina Fotopolimerizável 2 faces": 950,
                      "Restauração em Resina Fotopolimerizável 1 face": 3850,
                      "Restauração ponta de dente": 825
              },
              "Endodontia": {
                      "Remoção de Material Obturador": 1550,
                      "Tratamento Endodôntico em Dente Decíduo": 2160,
                      "Retratamento Endodôntico Multirradicular": 2500,
                      "Curativo de Demora": 950
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 1200
              },
              "Ortodontia": {
                      "Manutenção de Aparelho Ortodôntico Fixo": 500,
                      "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 10700,
                      "Manutenção Aparelho Expansor": 600
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 300
              },
              "Prevenção": {
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 800,
                      "Sessão Terapia a Laser": 1800,
                      "Profilaxia (limpeza)": 4155.26,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3300,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 7174.74,
                      "Raspagem de tártaro supra gengival": 250,
                      "Soro Terapia": 750,
                      "Coenzima Q10 100mg/2ml IM": 300,
                      "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 300,
                      "Vitamina C 444mg/2 ml": 300,
                      "Procaína IM/EV 40mg/2ml": 5000,
                      "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1500,
                      "Metilcobalamina B12 2500mcg/2ml IM/EV": 400
              },
              "Prótese": {
                      "Bloco Porcelana Pura": 2900,
                      "Coroa Porcelana Pura": 10750,
                      "Bloco Cerômero": 1980,
                      "Coroa Cerômero": 550,
                      "Pino Pré Fabricado": 250,
                      "Provisório para Faceta": 950
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 150
              },
              "Outros": {
                      "Oxido Nitroso": 1250
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 5,
      mesNome: 'Maio',
      totalVendas: 83660.00,
      totalPorEspecialidade: {
              "Cirurgia": 3450,
              "Dentística": 29810,
              "Endodontia": 100,
              "Implantodontia": 15750,
              "Ortodontia": 2170,
              "Periodontia": 950,
              "Prevenção": 8110,
              "Prótese": 16150,
              "Urgência": 1200,
              "Outros": 1080,
              "Harmonização facial": 4890
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 2390,
              "Manutenção Aparelho Banda Alça": 500,
              "Colagem de Fragmentos Dentários": 1200,
              "Exodontia Simples de Decíduo": 1950,
              "Raspagem Supra-gengival (RAP) - Limpeza": 950,
              "Profilaxia (limpeza)": 3000,
              "Manutenção de Aparelho Ortodôntico Fixo": 600,
              "Myobrace": 470,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1710,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1550,
              "Coroa Cerômero": 2500,
              "Coroa Porcelana Pura": 13650,
              "Exodontia Simples de Permanente": 300,
              "Faceta em Resina Fotopolimerizável": 23100,
              "Restauração em Resina Fotopolimerizável 2 faces": 2850,
              "Restauração em Resina Fotopolimerizável 3 faces": 2100,
              "Núcleo de Preenchimento": 900,
              "Restauração em Resina Fotopolimerizável 1 face": 860,
              "Curativo de Demora": 100,
              "Aplicação de Selante de Fóssulas e Fissuras": 650,
              "Consulta de Avaliação": 1200,
              "Terapia Neural": 1080,
              "Botox para Bruxismo e Briquismo": 2500,
              "Remoção de contenção fixa": 600,
              "Exodontia com Odonto-Secção": 1200,
              "Instalação de Implante Ósseo Integrado": 15750
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 1950,
                      "Exodontia Simples de Permanente": 300,
                      "Exodontia com Odonto-Secção": 1200
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 23100,
                      "Restauração em Resina Fotopolimerizável 2 faces": 2850,
                      "Restauração em Resina Fotopolimerizável 3 faces": 2100,
                      "Núcleo de Preenchimento": 900,
                      "Restauração em Resina Fotopolimerizável 1 face": 860
              },
              "Endodontia": {
                      "Curativo de Demora": 100
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 15750
              },
              "Ortodontia": {
                      "Manutenção Aparelho Banda Alça": 500,
                      "Manutenção de Aparelho Ortodôntico Fixo": 600,
                      "Myobrace": 470,
                      "Remoção de contenção fixa": 600
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 950
              },
              "Prevenção": {
                      "Profilaxia (limpeza)": 3000,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 1710,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1550,
                      "Aplicação de Selante de Fóssulas e Fissuras": 650,
                      "Consulta de Avaliação": 1200
              },
              "Prótese": {
                      "Coroa Cerômero": 2500,
                      "Coroa Porcelana Pura": 13650
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 1200
              },
              "Outros": {
                      "Terapia Neural": 1080
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 2390,
                      "Botox para Bruxismo e Briquismo": 2500
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 6,
      mesNome: 'Junho',
      totalVendas: 76378.50,
      totalPorEspecialidade: {
              "Cirurgia": 1050,
              "Dentística": 22983.8,
              "Endodontia": 3150,
              "Implantodontia": 1600,
              "Ortodontia": 1200,
              "Periodontia": 1560,
              "Prevenção": 19115.64,
              "Prótese": 14906.56,
              "Urgência": 552.5,
              "Outros": 2800,
              "Harmonização facial": 7460
      },
      totalPorTratamento: {
              "Laser Terapia": 1200,
              "Faceta em Resina Fotopolimerizável": 5018.8,
              "Toxina botulínica (botox)": 7360,
              "Clareamento em Consultório": 3700,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3925.64,
              "Manutenção Aparelho Ortopédico": 600,
              "Restauração em Resina Fotopolimerizável 1 face": 6815,
              "Manutenção Aparelho Expansor": 600,
              "Raspagem Sub-gengival (RASUB)": 1050,
              "Raspagem Supra-gengival (RAP) - Limpeza": 510,
              "Lente Porcelana Pura": 7656.5599999999995,
              "Profilaxia (limpeza)": 7440,
              "Limpeza Facial": 100,
              "Coenzima Q10 100mg/2ml IM": 300,
              "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 300,
              "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 300,
              "Vitamina C 444mg/2 ml": 300,
              "Noripurum EV 100mg/5ml": 800,
              "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1500,
              "Clareamento Dentário Caseiro": 400,
              "Raspagem de tártaro supra gengival": 250,
              "Placa de Clareamento": 300,
              "Retratamento Endodôntico Unirradicular": 1600,
              "Tratamento Endodôntico em Dente Decíduo": 600,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
              "Colagem de Fragmentos Dentários": 552.5,
              "Coroa Porcelana Pura": 7000,
              "Exodontia Simples de Permanente": 150,
              "Restauração em Resina Fotopolimerizável 2 faces": 5000,
              "Restauração em Resina Fotopolimerizável 4 faces": 1150,
              "Prótese Fixa Adesiva em Cerômero (metal free)": 250,
              "Curativo de Demora": 950,
              "Reparo de Resina Composta": 600,
              "Consulta de Avaliação": 1200,
              "Consulta Odontológica Integrativa": 1200,
              "Exodontia Simples de Decíduo": 900,
              "Instalação de Implante Ósseo Integrado": 1600,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1600
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 150,
                      "Exodontia Simples de Decíduo": 900
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 5018.8,
                      "Clareamento em Consultório": 3700,
                      "Restauração em Resina Fotopolimerizável 1 face": 6815,
                      "Restauração em Resina Fotopolimerizável 2 faces": 5000,
                      "Restauração em Resina Fotopolimerizável 4 faces": 1150,
                      "Reparo de Resina Composta": 600,
                      "Clareamento Dentário Caseiro": 400,
                      "Placa de Clareamento": 300
              },
              "Endodontia": {
                      "Retratamento Endodôntico Unirradicular": 1600,
                      "Tratamento Endodôntico em Dente Decíduo": 600,
                      "Curativo de Demora": 950
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 1600
              },
              "Ortodontia": {
                      "Manutenção Aparelho Ortopédico": 600,
                      "Manutenção Aparelho Expansor": 600
              },
              "Periodontia": {
                      "Raspagem Sub-gengival (RASUB)": 1050,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 510
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3925.64,
                      "Profilaxia (limpeza)": 7440,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
                      "Consulta de Avaliação": 1200,
                      "Consulta Odontológica Integrativa": 1200,
                      "Raspagem de tártaro supra gengival": 250,
                      "Coenzima Q10 100mg/2ml IM": 300,
                      "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 300,
                      "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 300,
                      "Vitamina C 444mg/2 ml": 300,
                      "Noripurum EV 100mg/5ml": 800,
                      "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1500
              },
              "Prótese": {
                      "Lente Porcelana Pura": 7656.5599999999995,
                      "Coroa Porcelana Pura": 7000,
                      "Prótese Fixa Adesiva em Cerômero (metal free)": 250
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 552.5
              },
              "Outros": {
                      "Laser Terapia": 1200,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1600
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 7360,
                      "Limpeza Facial": 100
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 7,
      mesNome: 'Julho',
      totalVendas: 71295.00,
      totalPorEspecialidade: {
              "Cirurgia": 6400,
              "Dentística": 3285,
              "Endodontia": 5050,
              "Implantodontia": 5500,
              "Ortodontia": 850,
              "Prevenção": 22940,
              "Prótese": 7200,
              "Testes e exames laboratoriais": 1200,
              "Urgência": 4350,
              "Outros": 600,
              "Harmonização facial": 12550,
              "Estética": 1370
      },
      totalPorTratamento: {
              "Toxina botulínica (botox)": 2550,
              "Harmonização Facial": 3500,
              "Colagem de Fragmentos Dentários": 2750,
              "Restauração em Resina Fotopolimerizável 1 face": 1150,
              "Manutenção Aparelho Expansor": 350,
              "Consulta odontológica": 600,
              "Consulta Odontológica de Urgência": 1600,
              "Profilaxia (limpeza)": 14040,
              "Manutenção de Aparelho Ortodôntico Fixo": 500,
              "Limpeza Facial": 600,
              "Restauração em Resina Fotopolimerizável 2 faces": 400,
              "Seringa clareamento": 100,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3100,
              "Microagulhamento com PRP": 600,
              "Hydra Gloss": 270,
              "Placa protetora oclusal": 2500,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
              "Diagnóstico Anatomopatológico em Material de Biópsia": 1200,
              "Pino Pré Fabricado": 1200,
              "Tratamento Endodôntico Multirradicular": 4100,
              "Coroa Porcelana Pura": 3500,
              "Preenchimento de mento": 1600,
              "Preenchimento de malar": 3200,
              "Preenchimento labial": 1600,
              "Restauração em Resina Fotopolimerizável 3 faces": 945,
              "Sessão Clareamento em Consultório": 600,
              "Curativo de Demora": 950,
              "Reparo de Resina Composta": 90,
              "Aplicação de Selante de Fóssulas e Fissuras": 3600,
              "Consulta de Avaliação": 600,
              "Frenectomia Lingual Laser Cirurgico": 3200,
              "Frenectomia Labial Laser Cirurgico": 3200,
              "Implante de Zirconia": 5500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Frenectomia Lingual Laser Cirurgico": 3200,
                      "Frenectomia Labial Laser Cirurgico": 3200
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 1150,
                      "Restauração em Resina Fotopolimerizável 3 faces": 945,
                      "Sessão Clareamento em Consultório": 600,
                      "Reparo de Resina Composta": 90,
                      "Restauração em Resina Fotopolimerizável 2 faces": 400,
                      "Seringa clareamento": 100
              },
              "Endodontia": {
                      "Tratamento Endodôntico Multirradicular": 4100,
                      "Curativo de Demora": 950
              },
              "Implantodontia": {
                      "Implante de Zirconia": 5500
              },
              "Ortodontia": {
                      "Manutenção Aparelho Expansor": 350,
                      "Manutenção de Aparelho Ortodôntico Fixo": 500
              },
              "Prevenção": {
                      "Profilaxia (limpeza)": 14040,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3100,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
                      "Aplicação de Selante de Fóssulas e Fissuras": 3600,
                      "Consulta de Avaliação": 600
              },
              "Prótese": {
                      "Placa protetora oclusal": 2500,
                      "Pino Pré Fabricado": 1200,
                      "Coroa Porcelana Pura": 3500
              },
              "Testes e exames laboratoriais": {
                      "Diagnóstico Anatomopatológico em Material de Biópsia": 1200
              },
              "Urgência": {
                      "Colagem de Fragmentos Dentários": 2750,
                      "Consulta Odontológica de Urgência": 1600
              },
              "Outros": {
                      "Consulta odontológica": 600
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 2550,
                      "Harmonização Facial": 3500,
                      "Preenchimento de mento": 1600,
                      "Preenchimento de malar": 3200,
                      "Preenchimento labial": 1600,
                      "Limpeza Facial": 100
              },
              "Estética": {
                      "Microagulhamento com PRP": 600,
                      "Hydra Gloss": 270,
                      "Limpeza Facial": 500
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 8,
      mesNome: 'Agosto',
      totalVendas: 172372.50,
      totalPorEspecialidade: {
              "Cirurgia": 8100,
              "Dentística": 17417.5,
              "Endodontia": 3700,
              "Implantodontia": 5250,
              "Ortodontia": 28200,
              "Prevenção": 34255,
              "Prótese": 65250,
              "Outros": 3700,
              "Harmonização facial": 6500
      },
      totalPorTratamento: {
              "Exodontia Simples de Decíduo": 1900,
              "Profilaxia (limpeza)": 11000,
              "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 300,
              "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 300,
              "Procaína IM/EV 40mg/2ml": 1500,
              "Noripurum EV 100mg/5ml": 400,
              "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1500,
              "Metilcobalamina B12 2500mcg/2ml IM/EV": 400,
              "Clareamento Dentário Caseiro": 800,
              "Restauração em Resina Fotopolimerizável 2 faces": 11600,
              "Restauração em Ionômero de Vidro - 1 face": 850,
              "Restauração em Resina Fotopolimerizável 1 face": 2667.5,
              "Remineralização 1 sessão": 300,
              "Consulta, Orientações, Limpeza e Aplicação de Flúor": 400,
              "Faceta em Resina Fotopolimerizável": 300,
              "Provisório": 900,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3705,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 4800,
              "Bloco Porcelana Pura": 13050,
              "Pino Pré Fabricado": 1800,
              "Retratamento Endodôntico Multirradicular": 2500,
              "Coroa Porcelana Pura": 3500,
              "Preenchimento de mento": 1200,
              "Rinomodelação": 1600,
              "IOIS Cursos - Botox e Preenchedores": 1800,
              "Raspagem de tártaro supra gengival": 950,
              "Exodontia de Dentes Inclusos / Impactados": 3800,
              "Limpeza e Manutenção da Prótese Protocolo": 1200,
              "Remoção de Núcleo Intra-Radicular": 600,
              "Remoção de Trabalho Protético": 600,
              "Sessão Clareamento em Consultório": 900,
              "Aparelho Ortopédico Expansor Maxilar": 3150,
              "Aplicação de Selante de Fóssulas e Fissuras": 9000,
              "Clear Aligner Mini": 21300,
              "Exodontia Siso": 2400,
              "Toxina botulínica (botox)": 1600,
              "Unidade Toxina Botulínica ( botox)": 300,
              "Coroa Total Metalo Cerâmica sobre Implante": 5250,
              "Manutenção Aparelho Ortopédico": 600,
              "Aparelho Ortopédico Expansor Mandibular": 3150,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1600,
              "Consulta Inicial": 600,
              "Oxido Nitroso": 1500,
              "Faceta em Cerâmica Pura": 19200,
              "Lente Porcelana Pura": 25600
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Decíduo": 1900,
                      "Exodontia de Dentes Inclusos / Impactados": 3800,
                      "Exodontia Siso": 2400
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 11600,
                      "Restauração em Resina Fotopolimerizável 1 face": 2667.5,
                      "Sessão Clareamento em Consultório": 900,
                      "Clareamento Dentário Caseiro": 800,
                      "Restauração em Ionômero de Vidro - 1 face": 850,
                      "Remineralização 1 sessão": 300,
                      "Faceta em Resina Fotopolimerizável": 300
              },
              "Endodontia": {
                      "Retratamento Endodôntico Multirradicular": 2500,
                      "Remoção de Núcleo Intra-Radicular": 600,
                      "Remoção de Trabalho Protético": 600
              },
              "Implantodontia": {
                      "Coroa Total Metalo Cerâmica sobre Implante": 5250
              },
              "Ortodontia": {
                      "Aparelho Ortopédico Expansor Maxilar": 3150,
                      "Clear Aligner Mini": 21300,
                      "Manutenção Aparelho Ortopédico": 600,
                      "Aparelho Ortopédico Expansor Mandibular": 3150
              },
              "Prevenção": {
                      "Profilaxia (limpeza)": 11000,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3705,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 4800,
                      "Raspagem de tártaro supra gengival": 950,
                      "Aplicação de Selante de Fóssulas e Fissuras": 9000,
                      "Consulta, Orientações, Limpeza e Aplicação de Flúor": 400,
                      "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 300,
                      "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 300,
                      "Procaína IM/EV 40mg/2ml": 1500,
                      "Noripurum EV 100mg/5ml": 400,
                      "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1500,
                      "Metilcobalamina B12 2500mcg/2ml IM/EV": 400
              },
              "Prótese": {
                      "Provisório": 900,
                      "Bloco Porcelana Pura": 13050,
                      "Pino Pré Fabricado": 1800,
                      "Coroa Porcelana Pura": 3500,
                      "Limpeza e Manutenção da Prótese Protocolo": 1200,
                      "Faceta em Cerâmica Pura": 19200,
                      "Lente Porcelana Pura": 25600
              },
              "Outros": {
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 1600,
                      "Consulta Inicial": 600,
                      "Oxido Nitroso": 1500
              },
              "Harmonização facial": {
                      "Preenchimento de mento": 1200,
                      "Rinomodelação": 1600,
                      "IOIS Cursos - Botox e Preenchedores": 1800,
                      "Toxina botulínica (botox)": 1600,
                      "Unidade Toxina Botulínica ( botox)": 300
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 9,
      mesNome: 'Setembro',
      totalVendas: 66330.00,
      totalPorEspecialidade: {
              "Cirurgia": 5446.3099999999995,
              "Dentística": 22350,
              "Endodontia": 7200,
              "Implantodontia": 1231.58,
              "Ortodontia": 11500,
              "Periodontia": 1150,
              "Prevenção": 12510,
              "Prótese": 2142.11,
              "Outros": 1200,
              "Harmonização facial": 1600
      },
      totalPorTratamento: {
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3000,
              "Exodontia com Retalho": 1626.31,
              "Restauração em Resina Fotopolimerizável 1 face": 4000,
              "Sessão Clareamento em Consultório": 200,
              "Instalação de Implante Ósseo Integrado": 1231.58,
              "Raspagem Supra-gengival (RAP) - Limpeza": 950,
              "Reparo de Resina Composta": 5400,
              "Profilaxia (limpeza)": 5680,
              "Myobrace": 2500,
              "Coenzima Q10 100mg/2ml IM": 72,
              "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 72,
              "Noripurum EV 100mg/5ml": 800,
              "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 360,
              "Metilcobalamina B12 2500mcg/2ml IM/EV": 96,
              "Clareamento Dentário Caseiro": 800,
              "Restauração ponta de dente": 400,
              "Provisório": 142.11,
              "Raspagem de tártaro supra gengival": 250,
              "Raspagem Sub-gengival (RASUB)": 200,
              "Exodontia Simples de Permanente": 200,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
              "Faceta em Resina Fotopolimerizável": 5000,
              "Retratamento Endodôntico Unirradicular": 2400,
              "Tratamento Endodôntico Multirradicular": 4800,
              "Biópsia de Boca": 1200,
              "Preenchimento labial": 1600,
              "Clareamento Associado": 3700,
              "Restauração em Resina Fotopolimerizável 2 faces": 2850,
              "Aparelho Ortopédico Expansor Maxilar": 4200,
              "Prevenção Odontopediatria": 580,
              "Ulectomia Laser": 950,
              "Frenectomia lingual Tesoura": 570,
              "Remoção de contenção fixa": 600,
              "Exodontia Simples de Decíduo": 900,
              "Aparelho Ortopédico Expansor Mandibular": 4200,
              "Consulta odontológica": 1200,
              "Faceta em Cerâmica Pura": 2000
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia com Retalho": 1626.31,
                      "Biópsia de Boca": 1200,
                      "Ulectomia Laser": 950,
                      "Exodontia Simples de Permanente": 200,
                      "Frenectomia lingual Tesoura": 570,
                      "Exodontia Simples de Decíduo": 900
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 4000,
                      "Sessão Clareamento em Consultório": 200,
                      "Reparo de Resina Composta": 5400,
                      "Clareamento Associado": 3700,
                      "Restauração em Resina Fotopolimerizável 2 faces": 2850,
                      "Clareamento Dentário Caseiro": 800,
                      "Restauração ponta de dente": 400,
                      "Faceta em Resina Fotopolimerizável": 5000
              },
              "Endodontia": {
                      "Retratamento Endodôntico Unirradicular": 2400,
                      "Tratamento Endodôntico Multirradicular": 4800
              },
              "Implantodontia": {
                      "Instalação de Implante Ósseo Integrado": 1231.58
              },
              "Ortodontia": {
                      "Aparelho Ortopédico Expansor Maxilar": 4200,
                      "Myobrace": 2500,
                      "Remoção de contenção fixa": 600,
                      "Aparelho Ortopédico Expansor Mandibular": 4200
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 950,
                      "Raspagem Sub-gengival (RASUB)": 200
              },
              "Prevenção": {
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 3000,
                      "Profilaxia (limpeza)": 5680,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1600,
                      "Prevenção Odontopediatria": 580,
                      "Raspagem de tártaro supra gengival": 250,
                      "Coenzima Q10 100mg/2ml IM": 72,
                      "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 72,
                      "Noripurum EV 100mg/5ml": 800,
                      "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 360,
                      "Metilcobalamina B12 2500mcg/2ml IM/EV": 96
              },
              "Prótese": {
                      "Provisório": 142.11,
                      "Faceta em Cerâmica Pura": 2000
              },
              "Outros": {
                      "Consulta odontológica": 1200
              },
              "Harmonização facial": {
                      "Preenchimento labial": 1600
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 10,
      mesNome: 'Outubro',
      totalVendas: 154186.50,
      totalPorEspecialidade: {
              "Cirurgia": 9668.68,
              "Dentística": 14080.76,
              "Endodontia": 3600,
              "Implantodontia": 56579.96,
              "Ortodontia": 3074.3100000000004,
              "Periodontia": 4891.5,
              "Prevenção": 13983.63,
              "Prótese": 23143.62,
              "Outros": 16720.29,
              "Harmonização facial": 4993.75,
              "Estética": 3450
      },
      totalPorTratamento: {
              "Faceta em Resina Fotopolimerizável": 5490,
              "Aumento de Coroa Clínica": 124.29,
              "Clareamento em Consultório": 665,
              "Flúor Terapia": 55.24,
              "Exodontia Simples de Permanente": 275,
              "Exodontia Simples de Decíduo": 2250,
              "Restauração em Ionômero de Vidro - 1 face": 186.45,
              "Restauração em Resina Fotopolimerizável 1 face": 3789.31,
              "Consulta odontológica": 1800,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1267.21,
              "Refil Escova Elétrica": 120,
              "Placa de Bruxismo Infantil": 1105,
              "Aparelho Ortopédico Expansor Mandibular": 1275,
              "Profilaxia (limpeza)": 5088.74,
              "Coenzima Q10 100mg/2ml IM": 300,
              "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 600,
              "Vitamina C 444mg/2 ml": 300,
              "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 750,
              "Metilcobalamina B12 2500mcg/2ml IM/EV": 800,
              "Contenção Fixa": 1327.47,
              "Placa de Hawlay Superior": 471.84,
              "Instalação de Implante Ósseo Integrado": 30173.71,
              "Exodontia Siso": 943.68,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2524.65,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1800,
              "Coroa Cerômero": 707.75,
              "Pino Pré Fabricado": 235.87,
              "Enzima Subcutânea": 200,
              "Vitamina D 600mg Endovenosa": 242.91,
              "Suplementação Ferro Endovenoso": 250.37,
              "Hidratação Venosa ( Reposição eletrolítica de sais minerais , potássio e água ).": 145.6,
              "Protocolo Disbiose Intestinal Endovenosa. ( 5-HTP 10mg, Complexo B, L-Glutamina 120mg, Picolinato de Cromo 100mcg, procaína, Vitamina B12 2500mcg, Vitamina B9 , Vitamina C 444mg e Zinco Sulfato 20mg.": 631.41,
              "Microagulhamento com PRP": 3000,
              "Limpeza Facial": 250,
              "Placa protetora oclusal": 2500,
              "Exodontia de Dentes Semi-inclusos / impactados": 2400,
              "Tratamento Endodôntico em Dente Decíduo": 1200,
              "Tratamento Endodôntico Multirradicular": 2400,
              "Coroa Porcelana Pura": 1200,
              "Clareamento Associado": 800,
              "Exodontia de Dentes Inclusos / Impactados": 3800,
              "Restauração em Resina Fotopolimerizável 2 faces": 2850,
              "Coroa Provisória sobre Implante": 1406.25,
              "Placa de mordida miorelaxante": 3500,
              "Seringa clareamento": 300,
              "Prevenção Odontopediatria": 540,
              "Terapia Neural": 10200,
              "Toxina botulínica (botox)": 4993.75,
              "Protocolo inferior": 25000,
              "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 2850,
              "Consulta Inicial": 600,
              "Coroa Sobre Implante de Zirconia": 12000,
              "Prótese Total (PT)": 6500
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 275,
                      "Exodontia Simples de Decíduo": 2250,
                      "Exodontia de Dentes Semi-inclusos / impactados": 2400,
                      "Exodontia de Dentes Inclusos / Impactados": 3800,
                      "Exodontia Siso": 943.68
              },
              "Dentística": {
                      "Faceta em Resina Fotopolimerizável": 5490,
                      "Clareamento em Consultório": 665,
                      "Restauração em Ionômero de Vidro - 1 face": 186.45,
                      "Restauração em Resina Fotopolimerizável 1 face": 3789.31,
                      "Clareamento Associado": 800,
                      "Restauração em Resina Fotopolimerizável 2 faces": 2850,
                      "Seringa clareamento": 300
              },
              "Endodontia": {
                      "Tratamento Endodôntico em Dente Decíduo": 1200,
                      "Tratamento Endodôntico Multirradicular": 2400
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 1406.25,
                      "Instalação de Implante Ósseo Integrado": 30173.71,
                      "Protocolo inferior": 25000
              },
              "Ortodontia": {
                      "Aparelho Ortopédico Expansor Mandibular": 1275,
                      "Contenção Fixa": 1327.47,
                      "Placa de Hawlay Superior": 471.84
              },
              "Periodontia": {
                      "Aumento de Coroa Clínica": 124.29,
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1267.21,
                      "Placa de mordida miorelaxante": 3500
              },
              "Prevenção": {
                      "Flúor Terapia": 55.24,
                      "Refil Escova Elétrica": 120,
                      "Placa de Bruxismo Infantil": 1105,
                      "Profilaxia (limpeza)": 5088.74,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 2524.65,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 1800,
                      "Prevenção Odontopediatria": 540,
                      "Coenzima Q10 100mg/2ml IM": 300,
                      "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 600,
                      "Vitamina C 444mg/2 ml": 300,
                      "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 750,
                      "Metilcobalamina B12 2500mcg/2ml IM/EV": 800
              },
              "Prótese": {
                      "Placa protetora oclusal": 2500,
                      "Coroa Porcelana Pura": 1200,
                      "Coroa Cerômero": 707.75,
                      "Pino Pré Fabricado": 235.87,
                      "Coroa Sobre Implante de Zirconia": 12000,
                      "Prótese Total (PT)": 6500
              },
              "Outros": {
                      "Consulta odontológica": 1800,
                      "Terapia Neural": 10200,
                      "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 2850,
                      "Consulta Inicial": 600,
                      "Vitamina D 600mg Endovenosa": 242.91,
                      "Suplementação Ferro Endovenoso": 250.37,
                      "Hidratação Venosa ( Reposição eletrolítica de sais minerais , potássio e água ).": 145.6,
                      "Protocolo Disbiose Intestinal Endovenosa. ( 5-HTP 10mg, Complexo B, L-Glutamina 120mg, Picolinato de Cromo 100mcg, procaína, Vitamina B12 2500mcg, Vitamina B9 , Vitamina C 444mg e Zinco Sulfato 20mg.": 631.41
              },
              "Harmonização facial": {
                      "Toxina botulínica (botox)": 4993.75
              },
              "Estética": {
                      "Microagulhamento com PRP": 3000,
                      "Limpeza Facial": 250,
                      "Enzima Subcutânea": 200
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 11,
      mesNome: 'Novembro',
      totalVendas: 158555.00,
      totalPorEspecialidade: {
              "Cirurgia": 4823.860000000001,
              "Dentística": 24428.149999999998,
              "Endodontia": 2800,
              "Implantodontia": 26870,
              "Periodontia": 1583.65,
              "Prevenção": 29068.46000000001,
              "Prótese": 58430.88,
              "Urgência": 1200,
              "Outros": 950,
              "Harmonização facial": 6700,
              "Estética": 1700
      },
      totalPorTratamento: {
              "Coroa Provisória sobre Implante": 720,
              "Flúor Terapia": 640.01,
              "Restauração em Resina Fotopolimerizável 2 faces": 7282.5,
              "Escova Elétrica": 150,
              "Profilaxia e Polimento Dentário com Raspagem Supragengival": 6991.68,
              "Exodontia Simples de Permanente": 1223.8600000000001,
              "Restauração em Resina Fotopolimerizável 1 face": 9452.08,
              "Coroa Total Metalo Cerâmica sobre Implante": 7660,
              "Instalação de Implante Ósseo Integrado": 14290,
              "Consulta odontológica": 950,
              "Raspagem Supra-gengival (RAP) - Limpeza": 1583.65,
              "Profilaxia (limpeza)": 5189.28,
              "Raspagem de tártaro supra gengival": 650,
              "Coenzima Q10 100mg/2ml IM": 258.63,
              "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 258.63,
              "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 258.63,
              "Vitamina C 444mg/2 ml": 258.63,
              "Procaína IM/EV 40mg/2ml": 1651.36,
              "Noripurum EV 100mg/5ml": 689.6099999999999,
              "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1288.53,
              "Metilcobalamina B12 2500mcg/2ml IM/EV": 464.83,
              "Soro Ringer Lactato": 648.64,
              "Enzima Subcutânea": 200,
              "Microagulhamento com PRP": 1200,
              "Limpeza Facial": 300,
              "Retratamento Endodôntico Unirradicular": 2500,
              "Profilaxia e Polimento Dentário com Raspagem Subgengival": 250,
              "Coroa Cerômero": 874.99,
              "Tratamento Endodôntico Multirradicular": 300,
              "Coroa Porcelana Pura": 3500,
              "Preenchimento de malar": 3000,
              "Clareamento Associado": 1365.01,
              "Faceta em Resina Fotopolimerizável": 3520,
              "Limpeza e Manutenção da Prótese Protocolo": 1500,
              "Bloco Cerômero": 4449.24,
              "Reparo de Resina Composta": 2158.56,
              "Prevenção Adulto": 1200,
              "Prevenção Odontopediatria": 7620,
              "Consulta de Avaliação": 600,
              "Coroa Resina sobre implante PMMA": 4200,
              "Exodontia com Odonto-Secção": 1900,
              "Exodontia de Raiz Residual": 400,
              "Exodontia Simples de Decíduo": 1300,
              "Restauração em Ionômero de Vidro - 1 face": 650,
              "Toxina botulínica (botox)": 3700,
              "Coroa Sobre Implante de Zirconia": 19406.65,
              "Lente Porcelana Pura": 28700,
              "Hora clínica de Urgência": 1200
      },
      tratamentosPorEspecialidade: {
              "Cirurgia": {
                      "Exodontia Simples de Permanente": 1223.8600000000001,
                      "Exodontia com Odonto-Secção": 1900,
                      "Exodontia de Raiz Residual": 400,
                      "Exodontia Simples de Decíduo": 1300
              },
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 2 faces": 7282.5,
                      "Restauração em Resina Fotopolimerizável 1 face": 9452.08,
                      "Clareamento Associado": 1365.01,
                      "Faceta em Resina Fotopolimerizável": 3520,
                      "Reparo de Resina Composta": 2158.56,
                      "Restauração em Ionômero de Vidro - 1 face": 650
              },
              "Endodontia": {
                      "Retratamento Endodôntico Unirradicular": 2500,
                      "Tratamento Endodôntico Multirradicular": 300
              },
              "Implantodontia": {
                      "Coroa Provisória sobre Implante": 720,
                      "Coroa Total Metalo Cerâmica sobre Implante": 7660,
                      "Instalação de Implante Ósseo Integrado": 14290,
                      "Coroa Resina sobre implante PMMA": 4200
              },
              "Periodontia": {
                      "Raspagem Supra-gengival (RAP) - Limpeza": 1583.65
              },
              "Prevenção": {
                      "Flúor Terapia": 640.01,
                      "Escova Elétrica": 150,
                      "Profilaxia e Polimento Dentário com Raspagem Supragengival": 6991.68,
                      "Profilaxia (limpeza)": 5189.28,
                      "Raspagem de tártaro supra gengival": 650,
                      "Profilaxia e Polimento Dentário com Raspagem Subgengival": 250,
                      "Prevenção Adulto": 1200,
                      "Prevenção Odontopediatria": 7620,
                      "Consulta de Avaliação": 600,
                      "Coenzima Q10 100mg/2ml IM": 258.63,
                      "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 258.63,
                      "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 258.63,
                      "Vitamina C 444mg/2 ml": 258.63,
                      "Procaína IM/EV 40mg/2ml": 1651.36,
                      "Noripurum EV 100mg/5ml": 689.6099999999999,
                      "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 1288.53,
                      "Metilcobalamina B12 2500mcg/2ml IM/EV": 464.83,
                      "Soro Ringer Lactato": 648.64
              },
              "Prótese": {
                      "Coroa Cerômero": 874.99,
                      "Coroa Porcelana Pura": 3500,
                      "Limpeza e Manutenção da Prótese Protocolo": 1500,
                      "Bloco Cerômero": 4449.24,
                      "Coroa Sobre Implante de Zirconia": 19406.65,
                      "Lente Porcelana Pura": 28700
              },
              "Urgência": {
                      "Hora clínica de Urgência": 1200
              },
              "Outros": {
                      "Consulta odontológica": 950
              },
              "Harmonização facial": {
                      "Preenchimento de malar": 3000,
                      "Toxina botulínica (botox)": 3700
              },
              "Estética": {
                      "Microagulhamento com PRP": 1200,
                      "Limpeza Facial": 300,
                      "Enzima Subcutânea": 200
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    },
    {
      ano: 2025,
      mes: 12,
      mesNome: 'Dezembro',
      totalVendas: 5450.00,
      totalPorEspecialidade: {
              "Dentística": 910,
              "Endodontia": 840,
              "Periodontia": 600,
              "Prevenção": 600,
              "Harmonização facial": 2500
      },
      totalPorTratamento: {
              "Pulpotomia em dente decíduo": 840,
              "Restauração em Resina Fotopolimerizável 1 face": 910,
              "Coenzima Q10 100mg/2ml IM": 300,
              "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 300,
              "Gengivectomia": 600,
              "Botox para Bruxismo e Briquismo": 2500
      },
      tratamentosPorEspecialidade: {
              "Dentística": {
                      "Restauração em Resina Fotopolimerizável 1 face": 910
              },
              "Endodontia": {
                      "Pulpotomia em dente decíduo": 840
              },
              "Periodontia": {
                      "Gengivectomia": 600
              },
              "Prevenção": {
                      "Coenzima Q10 100mg/2ml IM": 300,
                      "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 300
              },
              "Harmonização facial": {
                      "Botox para Bruxismo e Briquismo": 2500
              }
      },
      vendasPorEspecialidade: [], // Dados detalhados não incluídos para reduzir tamanho
      vendasPorTratamento: [], // Dados detalhados não incluídos para reduzir tamanho
    }
  ],

  especialidades: ["Cirurgia","Dentística","Endodontia","Estética","Harmonização facial","Implantodontia","Ortodontia","Outros","Periodontia","Prevenção","Prótese","Testes e exames laboratoriais","Urgência"],

  tratamentos: ["Ajuste Oclusal por desgaste","Ajuste e reembasamento aparelho ortopédico","Aparelho Apneia e Ronco Sound Sleep","Aparelho Autoligado","Aparelho Expansor","Aparelho Expansor Hass","Aparelho Expansor Hyrax","Aparelho Fixo Estético Porcelana","Aparelho Ortodôntico Fixo Metálico","Aparelho Ortopédico Expansor Mandibular","Aparelho Ortopédico Expansor Maxilar","Aparelho expansor com cobertura oclusal e pista deslizante anterior","Aparelho ortopédico expansor com grade palatina","Aplicação Tópica de Verniz Fluoretado","Aplicação de Selante de Fóssulas e Fissuras","Aumento de Coroa Clínica","Bichectomia","Bioestimulador Radiesse","Bioestimulador Sculptra","Bioestimulador de colágeno","Bionator de Balters","Biópsia de Boca","Bloco Cerômero","Bloco Porcelana Pura","Botox para Bruxismo e Briquismo","Braquete Estético","COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV","Capeamento Pulpar Direto","Check up Integrativo","Cirurgia Odontológica com Aplicação de Aloenxertos","Cirurgia com Retalho","Cirurgia com retalho osteotomia e remoção de supranumerário","Cirurgia de Implantes Mandíbula Carga Imediata","Cirurgia de Implantes Maxila Técnica Hallonford","Clareamento Associado","Clareamento Dentário Caseiro","Clareamento em Consultório","Clear Aligner Mini","Coenzima Q10 100mg/2ml IM","Colagem Contenção Fixa","Colagem de Fragmentos Dentários","Condicionamento em Odontologia","Consulta Inicial","Consulta Integrativa Avulsa","Consulta Odontológica Integrativa","Consulta Odontológica de Urgência","Consulta Odontológica de Urgência 24 horas","Consulta de Avaliação","Consulta de Retorno","Consulta odontológica","Consulta, Orientações, Limpeza e Aplicação de Flúor","Consulta,checkup digital,profilaxia","Contenção Fixa","Contenção Fixa Estética","Coroa Cerômero","Coroa Porcelana Pura","Coroa Provisória sobre Implante","Coroa Resina sobre implante PMMA","Coroa Sobre Implante de Zirconia","Coroa Total Metalo Cerâmica sobre Implante","Coroa Total Pré-Fabricado de Zircônia","Coroa Total em Cerâmica Pura","Coroa Total em Cerômero","Cunha Proximal","Curativo de Demora","Diagnóstico Anatomopatológico em Material de Biópsia","Diagnóstico por Meio de Enceramento","Enxerto Conjuntivo Subepitelial","Enxerto Gengival Livre","Enxerto com Osso Liofilizado","Enzima Subcutânea","Escova Elétrica","Exodontia Complexa de Decíduo","Exodontia Simples de Decíduo","Exodontia Simples de Permanente","Exodontia Siso","Exodontia com Odonto-Secção","Exodontia com Retalho","Exodontia de Dentes Inclusos / Impactados","Exodontia de Dentes Semi-inclusos / impactados","Exodontia de Raiz Residual","Expansor MacNamara","Exérese ou Excisão de Cistos Odontológicos","Faceta em Cerâmica Pura","Faceta em Resina Fotopolimerizável","Fio de PDO tração","Fios de PDO liso","Fios de sustentação (espiculado)","Flúor Terapia","Frenectomia Labial Laser Cirurgico","Frenectomia Lingual Laser Cirurgico","Frenectomia lingual Tesoura","Frenectomia lingual a laser com sedação de óxido nitroso","Frenulectomia Lingual (Frenectomia)","Frenulectonia Labial (Frenectomia)","Gengivectomia","Gengivoplastia","Guia Cirúrgico para Implante","Harmonização Facial","Harmonyca","Hidratação De Olheiras","Hidratação Subdérmica com Ácido Hialurônico","Hidratação Venosa ( Reposição eletrolítica de sais minerais , potássio e água ).","Hora clínica de Urgência","Hydra Gloss","IOIS Cursos - Botox e Preenchedores","IOIS Cursos - Pré-Matrícula Mentoria","Implante Ortodôntico","Implante de Zirconia","Infiltrativa na região DTM","Instalação de Implante Ósseo Integrado","Instalação de implante cone morse","Laser Terapia","Lavieen 3 sessões","Lente Porcelana Pura","Limpeza Facial","Limpeza de coroas sobre implante","Limpeza e Manutenção da Prótese Protocolo","Lipo Enzimática de Papada - 1 Sessão","Mantenedor de espaço fixo","Mantenedor de espaço fixo com expansor e mola ativa","Mantenedor de espaço removível","Manutenção Aparelho Banda Alça","Manutenção Aparelho Expansor","Manutenção Aparelho Ortopédico","Manutenção de Aparelho Ortodôntico Fixo","Metilcobalamina B12 2500mcg/2ml IM/EV","Microagulhamento","Microagulhamento com PRP","Myobrace","Noripurum EV 100mg/5ml","Núcleo de Preenchimento","Oxido Nitroso","POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV","Paciente Modelo Bioestimulador Fios de PDO full face","Paciente Modelo Bioestimulador Fios de PDO terço superior","Paciente Modelo Bioestimulador Radiesse 1 seringa","Paciente Modelo Botox bruxismo e apertamento","Paciente Modelo Botox full face","Paciente Modelo Botox testa, olhos, cara de bravo e nariz","Paciente Modelo Preenchimento Malar 1 ml","Paciente Modelo Preenchimento bigode chinês 1 ml","Paciente Modelo Preenchimento boca 1 ml","Paciente Modelo Preenchimento mento 1 ml","Paciente Modelo Preenchimento olheira 1 ml","Pilar protético sobre implante","Pino Pré Fabricado","Placa Labio-ativa (Lip bumper)","Placa Miorrelaxante Reposicionadora Estabilizadora","Placa de Bruxismo Infantil","Placa de Clareamento","Placa de Haley com torno expansor","Placa de Hawlay Inferior","Placa de Hawlay Superior","Placa de Mordida Ortodôntica","Placa de mordida miorelaxante","Placa protetora oclusal","Plano Funcional Integrativo","Polimento Dentário","Preenchimento de malar","Preenchimento de mandíbula","Preenchimento de mento","Preenchimento de olheiras","Preenchimento de sulco labiomentoniano (marionete)","Preenchimento do sulco nasogeniano (bigode chinês)","Preenchimento labial","Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa","Preenchimento Ácido Hialurônico Bigode Chinês - 2 Seringas","Preenchimento Ácido Hialurônico Boca - 1 Seringa","Preenchimento Ácido Hialurônico Boca - 2 Seringas","Preenchimento Ácido Hialurônico Olheiras - 1 Seringa","Prevenção Adulto","Prevenção Odontopediatria","Procaína IM/EV 40mg/2ml","Profilaxia (limpeza)","Profilaxia + Polimento Coronário - Limpeza","Profilaxia e Polimento Dentário com Raspagem Subgengival","Profilaxia e Polimento Dentário com Raspagem Supragengival","Protocolo Disbiose Intestinal Endovenosa. ( 5-HTP 10mg, Complexo B, L-Glutamina 120mg, Picolinato de Cromo 100mcg, procaína, Vitamina B12 2500mcg, Vitamina B9 , Vitamina C 444mg e Zinco Sulfato 20mg.","Protocolo Superior e Inferior","Protocolo inferior","Protocolo superior","Provisório","Provisório para Faceta","Provisório para Inlay/Onlay","Prótese Fixa Adesiva Direta (provisória)","Prótese Fixa Adesiva Indireta em Metalo-Plástica 3 elementos","Prótese Fixa Adesiva em Cerômero (metal free)","Prótese Parcial Removível Provisória (PPR)","Prótese Parcial Removível com Grampos Bilateral (PPR)","Prótese Protocolo Cerâmico","Prótese Provisória Adesiva com Grampo de Orto","Prótese Total (PT)","Prótese Total Imediata (PT)","Prótese total removível implanto suportada","Pulpectomia","Pulpotomia","Pulpotomia em dente decíduo","Radiesse","Raspagem Sub-gengival (RASUB)","Raspagem Supra-gengival (RAP) - Limpeza","Raspagem de tártaro supra gengival","Reabilitação","Recimentação de Trabalhos Protéticos","Reconstrução em Resina Composta Nanoparticulada","Refil Escova Elétrica","Remineralização 1 sessão","Remoção de Corpo Estranho Intra-Canal","Remoção de Material Obturador","Remoção de Núcleo Intra-Radicular","Remoção de Trabalho Protético","Remoção de contenção fixa","Reparo de Resina Composta","Restauração Atraumática em Dente Decíduo","Restauração Inlay em Cerâmica Pura","Restauração Onlay em Cerâmica Pura","Restauração Temporária (Expectante)","Restauração em Ionômero de Vidro - 1 face","Restauração em Ionômero de Vidro - 2 faces","Restauração em Resina Fotopolimerizável 1 face","Restauração em Resina Fotopolimerizável 2 faces","Restauração em Resina Fotopolimerizável 3 faces","Restauração em Resina Fotopolimerizável 4 faces","Restauração ponta de dente","Restauração resina dente de leite","Retratamento Endodôntico Multirradicular","Retratamento Endodôntico Unirradicular","Rinomodelação","Seringa clareamento","Sessão Clareamento em Consultório","Sessão Terapia a Laser","Skinbooster","Soro Ringer Lactato","Soro Terapia","Suplementação Ferro Endovenoso","Terapia Endovenosa","Terapia Neural","Terapia a Laser 3 sessões","Torque coroa sobre implante","Toxina Botulínica Testa","Toxina botulínica (botox)","Tracionamento Cirúrgico com Finalidade Ortodôntica","Tratamento Endodôntico Birradicular","Tratamento Endodôntico Multirradicular","Tratamento Endodôntico Unirradicular","Tratamento Endodôntico com Dilaceração e Calcificação Pulpar","Tratamento Endodôntico de Dente com Rizogênese Incompleta","Tratamento Endodôntico em Dente Decíduo","Tratamento Odontológico","Tratamento Periodontal","Tratamento de Fluorose - microabrasão","Ulectomia","Ulectomia Laser","Ultraformer III - Bigode chinês","Ultraformer III - Bochechas lifth","Ultraformer III - Full face (somente face)","Ultraformer III - Full face + pescoço (sem papada)","Ultraformer III - Olhos","Ultraformer III - Papada","Ultraformer III - Pescoço","Ultraformer III Full Face","Unidade Toxina Botulínica ( botox)","Vitamina C 444mg/2 ml","Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM","Vitamina D 600mg Endovenosa"],

  totalGeral: 6253765.55,

  totalPorAno: {"2020":755091.7500000001,"2021":1177087.06,"2022":1193386.03,"2023":1020890.96,"2024":967982.25,"2025":1139327.5},

  totalPorEspecialidadeGeral: {
    "Dentística": 750313.0900000002,
    "Prevenção": 939523.4500000003,
    "Outros": 1544739.2000000002,
    "Cirurgia": 247037.27000000002,
    "Endodontia": 194613.47999999995,
    "Ortodontia": 416640.31,
    "Prótese": 941363.1200000017,
    "Urgência": 48518.229999999996,
    "Harmonização facial": 658744.9299999999,
    "Periodontia": 167531.43,
    "Implantodontia": 335821.0400000001,
    "Testes e exames laboratoriais": 2400,
    "Estética": 6520
  },

  totalPorTratamentoGeral: {
    "Clareamento em Consultório": 11276.59,
    "Toxina Botulínica Testa": 5000,
    "Profilaxia + Polimento Coronário - Limpeza": 6050,
    "Consulta odontológica": 595915.31,
    "Aplicação de Selante de Fóssulas e Fissuras": 91118.85999999997,
    "Preenchimento Ácido Hialurônico Boca - 1 Seringa": 36034.9,
    "Remoção de Corpo Estranho Intra-Canal": 1300,
    "Coroa Total em Cerâmica Pura": 8000,
    "Preenchimento Ácido Hialurônico Olheiras - 1 Seringa": 18260,
    "Exodontia de Dentes Inclusos / Impactados": 12100,
    "Exodontia Simples de Decíduo": 77575,
    "Restauração em Resina Fotopolimerizável 1 face": 202409.2499999999,
    "Tratamento Endodôntico Multirradicular": 63236.78,
    "Consulta de Retorno": 800,
    "Manutenção de Aparelho Ortodôntico Fixo": 38130,
    "Toxina botulínica (botox)": 306041.08999999997,
    "Preenchimento de olheiras": 11032,
    "Consulta Odontológica de Urgência": 27105.73,
    "Preenchimento de mandíbula": 10491.67,
    "Enxerto com Osso Liofilizado": 7500,
    "Coroa Total em Cerômero": 3000,
    "Provisório para Faceta": 4634.98,
    "Instalação de implante cone morse": 18000,
    "Enxerto Gengival Livre": 3500,
    "Bioestimulador de colágeno": 16700,
    "Tratamento Endodôntico Unirradicular": 22436.059999999998,
    "Placa de mordida miorelaxante": 42405,
    "Tratamento Endodôntico Birradicular": 23070,
    "Prótese Total (PT)": 13760,
    "Aparelho Ortodôntico Fixo Metálico": 7327,
    "Faceta em Cerâmica Pura": 104845.79999999997,
    "Preenchimento de malar": 29431.65,
    "Aplicação Tópica de Verniz Fluoretado": 1940,
    "Restauração em Resina Fotopolimerizável 2 faces": 245408.04999999996,
    "Preenchimento labial": 20185,
    "Coroa Provisória sobre Implante": 14380.11,
    "Clareamento Dentário Caseiro": 21296.28,
    "Bichectomia": 4650,
    "Tratamento Endodôntico em Dente Decíduo": 28250,
    "Profilaxia e Polimento Dentário com Raspagem Supragengival": 147815.21,
    "Preenchimento Ácido Hialurônico Boca - 2 Seringas": 3500,
    "Prótese Fixa Adesiva em Cerômero (metal free)": 4250,
    "Coroa Total Metalo Cerâmica sobre Implante": 33080.020000000004,
    "Instalação de Implante Ósseo Integrado": 134494.73000000004,
    "Consulta Inicial": 7602.5,
    "Raspagem Supra-gengival (RAP) - Limpeza": 72589.65000000002,
    "Consulta, Orientações, Limpeza e Aplicação de Flúor": 367468.48,
    "Bloco Cerômero": 27309.240000000005,
    "Fios de sustentação (espiculado)": 15910,
    "Aparelho Expansor": 6650,
    "Preenchimento Ácido Hialurônico Bigode Chinês - 2 Seringas": 4100,
    "Manutenção Aparelho Ortopédico": 8780,
    "Restauração em Ionômero de Vidro - 1 face": 2436.4500000000003,
    "Retratamento Endodôntico Multirradicular": 15839.869999999999,
    "Coroa Cerômero": 18705.850000000002,
    "Coroa Porcelana Pura": 175004.69999999998,
    "Preenchimento Ácido Hialurônico Bigode Chinês - 1 Seringa": 13490,
    "Prótese Fixa Adesiva Direta (provisória)": 1035.37,
    "Restauração resina dente de leite": 5430,
    "Tratamento Odontológico": 776040.56,
    "Pino Pré Fabricado": 17955.600000000002,
    "Frenulectomia Lingual (Frenectomia)": 6150,
    "Ulectomia": 2760,
    "Restauração em Ionômero de Vidro - 2 faces": 1650,
    "Prótese Parcial Removível com Grampos Bilateral (PPR)": 6114.66,
    "Rinomodelação": 9599.99,
    "Gengivoplastia": 4320,
    "Restauração em Resina Fotopolimerizável 3 faces": 28849.98,
    "Exodontia Simples de Permanente": 17847.120000000003,
    "Aparelho Apneia e Ronco Sound Sleep": 5000,
    "Radiesse": 3750,
    "Aparelho Expansor Hass": 32760,
    "Faceta em Resina Fotopolimerizável": 145494.54000000004,
    "Escova Elétrica": 10353,
    "Exérese ou Excisão de Cistos Odontológicos": 2150,
    "Restauração Atraumática em Dente Decíduo": 1625,
    "Manutenção Aparelho Expansor": 39075,
    "Expansor MacNamara": 9000,
    "Protocolo Superior e Inferior": 21000,
    "Aparelho Autoligado": 12000,
    "Exodontia Complexa de Decíduo": 4955,
    "Profilaxia e Polimento Dentário com Raspagem Subgengival": 59307.37,
    "Restauração Onlay em Cerâmica Pura": 2500,
    "Frenulectonia Labial (Frenectomia)": 200,
    "Clareamento Associado": 26085.01,
    "Placa de Haley com torno expansor": 2250,
    "Bloco Porcelana Pura": 157209.65999999992,
    "Terapia a Laser 3 sessões": 3300,
    "Frenectomia Lingual Laser Cirurgico": 42466.67,
    "Myobrace": 27668,
    "Exodontia Siso": 19928.679999999993,
    "Colagem de Fragmentos Dentários": 16907.5,
    "Núcleo de Preenchimento": 2950,
    "Sessão Clareamento em Consultório": 7350,
    "Refil Escova Elétrica": 2955.76,
    "Aparelho Expansor Hyrax": 14630,
    "Aparelho expansor com cobertura oclusal e pista deslizante anterior": 30326,
    "Oxido Nitroso": 28745.81,
    "Bioestimulador Radiesse": 22860,
    "Contenção Fixa": 7337.47,
    "Harmonização Facial": 57393.75,
    "Prótese total removível implanto suportada": 18000,
    "Placa de Hawlay Superior": 8691.84,
    "Microagulhamento": 495,
    "Frenectomia lingual a laser com sedação de óxido nitroso": 6440,
    "Lipo Enzimática de Papada - 1 Sessão": 450,
    "Raspagem Sub-gengival (RASUB)": 28712.5,
    "Skinbooster": 1200,
    "Curativo de Demora": 10875.77,
    "Consulta de Avaliação": 9800,
    "Preenchimento de mento": 12213.15,
    "Frenectomia Labial Laser Cirurgico": 18060,
    "Exodontia com Retalho": 12678.08,
    "Cunha Proximal": 600,
    "Provisório para Inlay/Onlay": 5515.4,
    "Implante Ortodôntico": 3100,
    "Reabilitação": 17000,
    "Pulpotomia": 3600,
    "Aparelho Ortopédico Expansor Maxilar": 47465,
    "Aparelho Ortopédico Expansor Mandibular": 60310,
    "Restauração em Resina Fotopolimerizável 4 faces": 7812.5,
    "Preenchimento de sulco labiomentoniano (marionete)": 1900,
    "Coroa Sobre Implante de Zirconia": 41058.81999999999,
    "Fios de PDO liso": 4200,
    "Placa Labio-ativa (Lip bumper)": 8880,
    "Limpeza e Manutenção da Prótese Protocolo": 8800,
    "Biópsia de Boca": 1800,
    "Remoção de Núcleo Intra-Radicular": 1050,
    "Aparelho Fixo Estético Porcelana": 1800,
    "Placa de Bruxismo Infantil": 3355,
    "Coroa Total Pré-Fabricado de Zircônia": 4000,
    "Aumento de Coroa Clínica": 2154.28,
    "Gengivectomia": 1660,
    "Restauração Temporária (Expectante)": 1050,
    "Mantenedor de espaço fixo": 2800,
    "Mantenedor de espaço removível": 2960,
    "Recimentação de Trabalhos Protéticos": 650,
    "Preenchimento do sulco nasogeniano (bigode chinês)": 1900,
    "Pulpotomia em dente decíduo": 2040,
    "Exodontia de Raiz Residual": 2000,
    "Lente Porcelana Pura": 183296.56000000003,
    "Paciente Modelo Botox testa, olhos, cara de bravo e nariz": 3580,
    "Paciente Modelo Bioestimulador Fios de PDO terço superior": 250,
    "Paciente Modelo Bioestimulador Fios de PDO full face": 950,
    "Paciente Modelo Bioestimulador Radiesse 1 seringa": 960,
    "Paciente Modelo Preenchimento olheira 1 ml": 1118,
    "Paciente Modelo Preenchimento mento 1 ml": 2960,
    "Paciente Modelo Preenchimento Malar 1 ml": 2542,
    "Paciente Modelo Preenchimento boca 1 ml": 1773.95,
    "Laser Terapia": 15160,
    "Ajuste Oclusal por desgaste": 1900,
    "Placa Miorrelaxante Reposicionadora Estabilizadora": 13322.74,
    "Reparo de Resina Composta": 24860.069999999996,
    "Restauração ponta de dente": 2625,
    "Torque coroa sobre implante": 1100,
    "Paciente Modelo Preenchimento bigode chinês 1 ml": 540,
    "Paciente Modelo Botox full face": 6587.5,
    "Sessão Terapia a Laser": 6585,
    "IOIS Cursos - Pré-Matrícula Mentoria": 1979,
    "IOIS Cursos - Botox e Preenchedores": 9300,
    "Protocolo superior": 19317.08,
    "Prótese Total Imediata (PT)": 10000,
    "Fio de PDO tração": 7000,
    "Colagem Contenção Fixa": 1500,
    "Aparelho ortopédico expansor com grade palatina": 3800,
    "Harmonyca": 8000,
    "Bioestimulador Sculptra": 12645,
    "Placa de Clareamento": 1800,
    "Seringa clareamento": 2470,
    "Placa de Mordida Ortodôntica": 1800,
    "Tratamento de Fluorose - microabrasão": 750,
    "Ajuste e reembasamento aparelho ortopédico": 2400,
    "Flúor Terapia": 1095.25,
    "Cirurgia com Retalho": 4500,
    "Exodontia com Odonto-Secção": 4900,
    "Capeamento Pulpar Direto": 2110,
    "Implante de Zirconia": 10450,
    "Braquete Estético": 750,
    "Restauração Inlay em Cerâmica Pura": 7200,
    "Consulta Odontológica Integrativa": 23980,
    "Ultraformer III Full Face": 4000,
    "Paciente Modelo Botox bruxismo e apertamento": 1600,
    "Ultraformer III - Papada": 10643.970000000001,
    "Hidratação Subdérmica com Ácido Hialurônico": 5125.67,
    "Ultraformer III - Bochechas lifth": 11500,
    "Ultraformer III - Bigode chinês": 1900,
    "Ultraformer III - Full face (somente face)": 7900,
    "Mantenedor de espaço fixo com expansor e mola ativa": 3610,
    "Retratamento Endodôntico Unirradicular": 9400,
    "Ultraformer III - Olhos": 1458,
    "Tratamento Periodontal": 1440,
    "Profilaxia (limpeza)": 103482.76,
    "Raspagem de tártaro supra gengival": 19389.270000000004,
    "Ultraformer III - Pescoço": 2288.53,
    "Provisório": 4597.11,
    "Reconstrução em Resina Composta Nanoparticulada": 5715,
    "Pulpectomia": 4555,
    "Bionator de Balters": 11000,
    "Remineralização 1 sessão": 900,
    "Limpeza de coroas sobre implante": 1306.72,
    "Consulta Odontológica de Urgência 24 horas": 855,
    "Tracionamento Cirúrgico com Finalidade Ortodôntica": 1900,
    "Ultraformer III - Full face + pescoço (sem papada)": 7500,
    "Plano Funcional Integrativo": 19300,
    "Placa de Hawlay Inferior": 2200,
    "Hidratação De Olheiras": 2800.01,
    "Check up Integrativo": 1200,
    "Consulta Integrativa Avulsa": 1500,
    "Tratamento Endodôntico de Dente com Rizogênese Incompleta": 1200,
    "Prevenção Odontopediatria": 24590,
    "Condicionamento em Odontologia": 1150,
    "Prótese Parcial Removível Provisória (PPR)": 4646.63,
    "Lavieen 3 sessões": 3690,
    "Pilar protético sobre implante": 900,
    "Infiltrativa na região DTM": 900,
    "Consulta,checkup digital,profilaxia": 325,
    "Guia Cirúrgico para Implante": 4500,
    "Prótese Protocolo Cerâmico": 63000,
    "Cirurgia de Implantes Mandíbula Carga Imediata": 13500,
    "Cirurgia de Implantes Maxila Técnica Hallonford": 13500,
    "Placa protetora oclusal": 5600,
    "Diagnóstico por Meio de Enceramento": 1200,
    "Polimento Dentário": 494.37,
    "Botox para Bruxismo e Briquismo": 7500,
    "Ulectomia Laser": 2150,
    "Unidade Toxina Botulínica ( botox)": 500,
    "Terapia Neural": 28219.83,
    "Frenectomia lingual Tesoura": 1770,
    "Hora clínica de Urgência": 2100,
    "Contenção Fixa Estética": 3500,
    "Soro Terapia": 3250,
    "Protocolo inferior": 38840,
    "Prótese Fixa Adesiva Indireta em Metalo-Plástica 3 elementos": 7000,
    "Prótese Provisória Adesiva com Grampo de Orto": 1000,
    "Tratamento Endodôntico com Dilaceração e Calcificação Pulpar": 3500,
    "Terapia Endovenosa": 2500,
    "Cirurgia Odontológica com Aplicação de Aloenxertos": 900,
    "Coroa Resina sobre implante PMMA": 11759.099999999999,
    "Coenzima Q10 100mg/2ml IM": 1530.63,
    "COMPLEXO B (B2 10mg + B3 10mg + B5 50mg +B6 10mg) 2ml IM/EV": 1158.63,
    "Vitamina C 444mg/2 ml": 1158.63,
    "Procaína IM/EV 40mg/2ml": 8151.36,
    "Vitamina D 100.000UI + Vitamina A 50.000UI + Vitamina E 500UI + Vitamina K2MK7 1300mg/2ml IM": 6898.53,
    "Metilcobalamina B12 2500mcg/2ml IM/EV": 2160.83,
    "Enxerto Conjuntivo Subepitelial": 600,
    "Remoção de Material Obturador": 1550,
    "Cirurgia com retalho osteotomia e remoção de supranumerário": 400,
    "Manutenção Aparelho Banda Alça": 500,
    "Remoção de contenção fixa": 1200,
    "Limpeza Facial": 1250,
    "POOL MINERAIS (Zinco 30mg + Maganes 25mg + Cobre 0,7mg + Cromo 200mg + Magnésio 500mg + Selênio 80mg) 2ml EV": 1830.63,
    "Noripurum EV 100mg/5ml": 2689.6099999999997,
    "Microagulhamento com PRP": 4800,
    "Hydra Gloss": 270,
    "Diagnóstico Anatomopatológico em Material de Biópsia": 1200,
    "Remoção de Trabalho Protético": 600,
    "Clear Aligner Mini": 21300,
    "Enzima Subcutânea": 400,
    "Vitamina D 600mg Endovenosa": 242.91,
    "Suplementação Ferro Endovenoso": 250.37,
    "Hidratação Venosa ( Reposição eletrolítica de sais minerais , potássio e água ).": 145.6,
    "Protocolo Disbiose Intestinal Endovenosa. ( 5-HTP 10mg, Complexo B, L-Glutamina 120mg, Picolinato de Cromo 100mcg, procaína, Vitamina B12 2500mcg, Vitamina B9 , Vitamina C 444mg e Zinco Sulfato 20mg.": 631.41,
    "Exodontia de Dentes Semi-inclusos / impactados": 2400,
    "Soro Ringer Lactato": 648.64,
    "Prevenção Adulto": 1200
  },
};
