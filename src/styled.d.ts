import { Theme } from "@charcoal-ui/theme";

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
