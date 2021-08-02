# Broto App step by step

## Um Diaria do desenvolvimento do meu primeiro aplicativo

## Feito para consultas futuras sobre o desenvolvimento

`Sistema base`

Instalando o expo no modo bareflow e configurando para o uso do Type script
Instalar o styled components - que vai ser a base para a estilização dos components e
as typagens para o typescript

yarn add styled-components
yarn add @types/styled-components-react-native -D

construção base com o theme de cores e fontes, para centralizar todo as informações e facilitar caso queira trocar no futuro

`construção dos types para os estilos`

```typescript
Styled.d.ts;

import "styled-components";
import theme from "./theme";

declare module "styled-components" {
  type Themetype = typeof theme;

  export interface DefaultTheme extends Themetype {}
}
```
