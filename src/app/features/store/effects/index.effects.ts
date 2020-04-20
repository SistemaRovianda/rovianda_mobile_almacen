import { LogginEffects } from "../../landing/store/login/login.effects";
import { MenuEffects } from "../../menu/store/menu/menu.effect";
import { PackagingEffects } from "../../packaging/store/packaging/packaging.effect";
import { OpenLoteEffects } from "../../packaging/store/open-lot/open-lot.effects";
import { CloseLotEffects } from "../../packaging/store/close-lot/close-lot.effects";
import { ExitEffects } from '../../packaging/store/exit/exit.effects';

export const effects = [
  LogginEffects,
  MenuEffects,
  PackagingEffects,
  OpenLoteEffects,
  CloseLotEffects,
  ExitEffects
];
