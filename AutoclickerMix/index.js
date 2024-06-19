const mc = Client.getMinecraft();
const useBind = new KeyBind(mc.field_71474_y.field_74313_G)
const attackBind = new KeyBind(mc.field_71474_y.field_74312_F)
const leftClickMethod = Client.getMinecraft().class.getDeclaredMethod("func_147116_af");
leftClickMethod.setAccessible(true);
const rightClickMethod = Client.getMinecraft().class.getDeclaredMethod("func_147121_ag");
rightClickMethod.setAccessible(true);
let cps = 5
let hypecps = 8
let nextclick = .0

function leftClick() {
    leftClickMethod.invoke(Client.getMinecraft());
}

function rightClick() {
    rightClickMethod.invoke(Client.getMinecraft());
}

register("renderOverlay", termAC);
register("renderOverlay", meleeAC);
register("renderOverlay", hypeAC);

function termAC() {
    if (!Player.getHeldItem().getName().includes("Terminator") || (!useBind.isKeyDown())) {
        return
    }
    nowMillis = Date.now();
    if (nowMillis < nextclick) return;
    nextclick = nowMillis + ((1000 / cps) + ((Math.random() - 0.5) * 60.0));
    leftClick();
}

function meleeAC() {
    if (!Player.getHeldItem().getName().includes("Katana") || (!attackBind.isKeyDown())) {
        return
    }
    nowMillis = Date.now();
    if (nowMillis < nextclick) return;
    nextclick = nowMillis + ((1000 / cps) + ((Math.random() - 0.5) * 60.0));
    leftClick();
}

function hypeAC() {
    if (!Player.getHeldItem().getName().includes("Hyperion") || (!useBind.isKeyDown())) {
        return
    }
    nowMillis = Date.now();
    if (nowMillis < nextclick) return;
    nextclick = nowMillis + ((1000 / hypecps) + ((Math.random() - 0.5) * 60.0));
    rightClick();
}
