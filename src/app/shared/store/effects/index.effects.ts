import { LogginEffects } from "src/app/features/landing/store/login/login.effects";
import { MenuEffects } from "src/app/features/menu/store/menu/menu.effect";
import { PackagingEffects } from "src/app/features/packaging/store/packaging/packaging.effect";
import { OpenLoteEffects } from "src/app/features/packaging/store/open-lot/open-lot.effects";
import { CloseLotEffects } from "src/app/features/packaging/store/close-lot/close-lot.effects";
import { ExitEffects } from "src/app/features/packaging/store/exit/exit.effects";
import { OpenLotEffects } from "src/app/features/dried/store/open-lot/open-lot.effects";

export const effects = [
  LogginEffects,
  MenuEffects,
  PackagingEffects,
  OpenLoteEffects,
  CloseLotEffects,
  ExitEffects,
  OpenLotEffects,
];
