

    /*function showMessage() {
        let output = "This is your small pop-up message!";
        Swal.fire({
            title: "Notification",
            text: output,
            icon: "info",
            confirmButtonText: "OK"
        });
    }*/

        function random1() {
    return Math.floor(Math.random() * 6) + 1;
}

function random2() {
    return Math.floor(Math.random() * 6) + 1;
}

// Counter variables
let count1_1 = 1; let count1_2 = 1; let count1_3 = 1;   
let count1_4 = 1; let count1_5 = 1; let count1_6 = 1;
let count2_1 = 1; let count2_2 = 1; let count2_3 = 1;
let count2_4 = 1; let count2_5 = 1; let count2_6 = 1;
let count3_1 = 1; let count3_2 = 1; let count3_3 = 1;
let count3_4 = 1; let count3_5 = 1; let count3_6 = 1;
let count4_1 = 1; let count4_2 = 1; let count4_3 = 1;
let count4_4 = 1; let count4_5 = 1; let count4_6 = 1;
let count5_1 = 1; let count5_2 = 1; let count5_3 = 1;
let count5_4 = 1; let count5_5 = 1; let count5_6 = 1;
let count6_1 = 1; let count6_2 = 1; let count6_3 = 1;
let count6_4 = 1; let count6_5 = 1; let count6_6 = 1;

function rollDice() {
    let roll1 = random1();
    let roll2 = random2();
    let output = `First throw: ${roll1}, Second throw: ${roll2}<br>`;

    switch (roll1) {
        case 1:
            if (roll2 == 1) { // punishment
                if (count1_1 == 1) { NotificationType = `عقوبة`; output = `قف على رجل واحدة 10 ثوانٍ`; count1_1++; }
                else if (count1_1 == 2) { NotificationType = `عقوبة`; output = `قم بـ 10 قفزات`; count1_1++; }
                else if (count1_1 == 3) { NotificationType = `عقوبة`; output = `20 تمرين ضغط متتالية`; count1_1++; }
                else if (count1_1 == 4) { NotificationType = `عقوبة`; output = `تحدث بلغة لا تعرفها لمدة 15 ثانية`; count1_1++; }
                else { NotificationType = `عقوبة`; output = `امشِ للخلف لمدة 30 ثانية دون النظر خلفك`; count1_1 = 1; }

            } else if (roll2 == 2) {//challenge
                if (count1_2 == 1) {  NotificationType = `تحححدي !! `; output = `احفظ رقم هاتف أحد اللاعبين خلال 10 ثوانٍ`; count1_2++; }
                else if (count1_2 == 2) {NotificationType = `تحححدي !! `; output = `قم برسم شجرة في أقل من 20 ثانية`; count1_2++; }
                else if (count1_2 == 3) {NotificationType = `تحححدي !! `; output = `احفظ جملة طويلة ثم أعد قولها دون خطأ`; count1_2++; }
                else if (count1_2 == 4) { NotificationType = `تحححدي !! `;output = `قم بـ 30 تمرين قفز خلال 30 ثانية`; count1_2++; }
                else { NotificationType = `تحححدي !! `;output = `تذكر 10 أشياء قالها اللاعب السابق دون خطأ`; count1_2 = 1; }

            } else if (roll2 == 3) {//challenge
                if (count1_3 == 1) { NotificationType = `تحححدي !! `;output = `قم بعدّ الأرقام من 1 إلى 20 بسرعة`; count1_3++; }
                else if (count1_3 == 2) { NotificationType = `تحححدي !! `;output = `غنِّ مقطعًا من أغنيتك المفضلة دون توقف`; count1_3++; }
                else if (count1_3 == 3) {NotificationType = `تحححدي !! `; output = `اجعل شخصًا يضحك دون لمسه أو قول كلمة مضحكة`; count1_3++; }
                else if (count1_3 == 4) { NotificationType = `تحححدي !! `;output = `امسك ملعقة بفمك وضع كرة صغيرة عليها دون أن تسقط لمدة 15 ثانية`; count1_3++; }
                else { NotificationType = `تحححدي !! `;output = `قم بموازنة كرة صغيرة على ملعقة في فمك أثناء المشي 10 خطوات دون إسقاطها`; count1_3 = 1; }

            } else if (roll2 == 4) {// ask friend
                if (count1_4 == 1) {  NotificationType = `اختار لاعب و اسأله`; output = `ما هو اسم والدي؟`; count1_4++; }
                else if (count1_4 == 2) { NotificationType = `اختار لاعب و اسأله`;  output = `ما هو الشيء الذي لا أستطيع العيش بدونه؟`; count1_4++; }
                else if (count1_4 == 3) {  NotificationType = `اختار لاعب و اسأله`; output = `ما هو أكبر سر أخفيه؟`; count1_4++; }
                else if (count1_4 == 4) {  NotificationType = `اختار لاعب و اسأله`; output = `ما هو الشيء الذي لا يعرفه أحد عني؟`; count1_4++; }
                else {  NotificationType = `اختار لاعب و اسأله`; output = `إذا اختفيت يومًا، كيف ستبحث عني؟`; count1_4 = 1; }

            } else if (roll2 == 5) { //challenge friend
                if (count1_5 == 1) {NotificationType = `اختار لاعب و تحداه `; output = `اجعل صديقك يقول كلمة غريبة دون أن يدرك`; count1_5++; }
                else if (count1_5 == 2) {NotificationType = `اختار لاعب و تحداه `; output = `اجعله يمشي بطريقة مضحكة لمدة 10 ثوانٍ`; count1_5++; }
                else if (count1_5 == 3) {NotificationType = `اختار لاعب و تحداه `; output = `اجعله يحفظ 5 كلمات عشوائية ثم يعيدها بعد دقيقة`; count1_5++; }
                else if (count1_5 == 4) {NotificationType = `اختار لاعب و تحداه `; output = `اجعله يحل لغزًا سريعًا في أقل من 10 ثوانٍ`; count1_5++; }
                else {NotificationType = `اختار لاعب و تحداه `; output = `اجعله يرتجل قصة قصيرة خلال 30 ثانية`; count1_5 = 1; }

            } else { // roll2 == 6   // skip
                if (count1_6 == 1) {NotificationType = `تخطي الجولة`; output = `ما نبي نلعب معك ذي اللفه (سكب )`; count1_6++; }
                else if (count1_6 == 2) {NotificationType = `تخطي الجولة`; output = `امممممم سخخن  (سكب )`; count1_6++; }
                else if (count1_6 == 3) {NotificationType = `تخطي الجولة`; output = `معليه تصير تصير  (سكب )`; count1_6++; }
                else if (count1_6 == 4) {NotificationType = `تخطي الجولة`; output = `لا ترفع صوتك طيب (سكب )`; count1_6++; }
                else {NotificationType = `تخطي الجولة`; output = `اخلاقك سيئه عشان كذا (سكب )`; count1_6 = 1; }
            }
            break;
        case 2:
            if (roll2 == 1) {// question
                if (count2_1 == 1) {NotificationType = `سؤاااال`; output = `ما لونك المفضل؟`; count2_1++; }
                else if (count2_1 == 2) {NotificationType = `سؤاااال`;  output = `إذا ربحت مليون دولار، ماذا ستفعل؟`; count2_1++; }
                else if (count2_1 == 3) {NotificationType = `سؤاااال`;  output = `ما أكبر مخاوفك في الحياة؟`; count2_1++; }
                else if (count2_1 == 4) {NotificationType = `سؤاااال`;  output = `ما هو أصعب قرار اتخذته في حياتك؟`; count2_1++; }
                else {NotificationType = `سؤاااال`;  output = `كيف ترى نفسك بعد 10 سنوات؟`; count2_1 = 1; }

            } else if (roll2 == 2) {// punishment
                if (count2_2 == 1) { NotificationType = `عقوبة`; output = `قل اسمك بالمقلوب 3 مرات`; count2_2++; }
                else if (count2_2 == 2) { NotificationType = `عقوبة`; output = `قلد شخصية كرتونية`; count2_2++; }
                else if (count2_2 == 3) { NotificationType = `عقوبة`; output = `قف على قدم واحدة مغمض العينين 30 ثانية`; count2_2++; }
                else if (count2_2 == 4) { NotificationType = `عقوبة`; output = `اركض في مكانك بسرعة لمدة دقيقة`; count2_2++; }
                else { NotificationType = `عقوبة`; output = `اقفز على حبل وهمي بسرعة لمدة دقيقتين مع العد بصوت عالٍ من 1 إلى 120 دون أخطاء`; count2_2 = 1; }

            } else if (roll2 == 3) {// question
                if (count2_3 == 1) {NotificationType = `سؤاااال`;  output = `ما هو اسم شخص تحبه؟`; count2_3++; }
                else if (count2_3 == 2) {NotificationType = `سؤاااال`;  output = `إذا كنت تستطيع امتلاك قوة خارقة، ماذا ستكون؟`; count2_3++; }
                else if (count2_3 == 3) {NotificationType = `سؤاااال`;  output = `إذا عاد بك الزمن، ماذا ستغير في حياتك؟`; count2_3++; }
                else if (count2_3 == 4) {NotificationType = `سؤاااال`;  output = `ما الشيء الذي تندم عليه أكثر شيء؟`; count2_3++; }
                else {NotificationType = `سؤاااال`;  output = `إذا اضطررت للتضحية بشيء عزيز جدًا عليك من أجل شخص آخر، ما الذي ستختار ولماذا؟`; count2_3 = 1; }

            } else if (roll2 == 4) {// punishment friend
                if (count2_4 == 1) {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يغني أغنية مضحكة`; count2_4++; }
                else if (count2_4 == 2) {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يقلد حركة مشهورة`; count2_4++; }
                else if (count2_4 == 3) {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يغلق عينيه ويحدد الأشياء من حوله باللمس`; count2_4++; }
                else if (count2_4 == 4) {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يغني أغنية دون تحريك شفتيه`; count2_4++; }
                else {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يبقى في وضعية تمرين الضغط لمدة 15 ثانية`; count2_4 = 1; }

            } else if (roll2 == 5) {// ask friend
                if (count2_5 == 1) {  NotificationType = `اختار لاعب و اسأله`; output = `كم عدد الأشخاص في الغرفة؟`; count2_5++; }
                else if (count2_5 == 2) {  NotificationType = `اختار لاعب و اسأله`; output = `ما هو أكثر شيء أخاف منه؟`; count2_5++; }
                else if (count2_5 == 3) { NotificationType = `اختار لاعب و اسأله`;  output = `إذا كنت في مأزق، هل ستساعدني؟ ولماذا؟`; count2_5++; }
                else if (count2_5 == 4) {  NotificationType = `اختار لاعب و اسأله`; output = `ما هو أصعب موقف مررت به؟`; count2_5++; }
                else {  NotificationType = `اختار لاعب و اسأله`; output = `ما هو أكبر فشل مررت به في حياتك، وكيف أثر عليك حتى الآن؟`; count2_5 = 1; }

            } else { // roll2 == 6  // challenge
                if (count2_6 == 1) {NotificationType = `تحححدي !! `; output = `قل كلمة صعبة النطق 5 مرات بسرعة`; count2_6++; }
                else if (count2_6 == 2) {NotificationType = `تحححدي !! `; output = `اكتب جملة كاملة باستخدام يدك غير المسيطرة`; count2_6++; }
                else if (count2_6 == 3) {NotificationType = `تحححدي !! `; output = `ارسم دائرة مثالية تقريبًا بيدك الحرة في أقل من 15 ثانية`; count2_6++; }
                else if (count2_6 == 4) {NotificationType = `تحححدي !! `; output = `عد من 50 إلى 1 بترتيب تنازلي مع التصفيق بين كل رقم دون أخطاء`; count2_6++; }
                else {NotificationType = `تحححدي !! `; output = `قف على رجل واحدة مع ذراعين ممدودتين وعد إلى 100 بصوت عالٍ دون فقدان التوازن`; count2_6 = 1; }
            }
            break;
        case 3:
            if (roll2 == 1) { // challenge
                if (count3_1 == 1) {NotificationType = `تحححدي !! `; output = `اربط حذاءك دون النظر إليه`; count3_1++; }
                else if (count3_1 == 2) {NotificationType = `تحححدي !! `; output = `تذكر 5 أشياء في الغرفة وأعد ذكرها بعد 30 ثانية`; count3_1++; }
                else if (count3_1 == 3) {NotificationType = `تحححدي !! `; output = `امسك كوب ماء ممتلئ دون أن تسكبه أثناء المشي لمدة 10 ثوانٍ`; count3_1++; }
                else if (count3_1 == 4) {NotificationType = `تحححدي !! `; output = `احفظ ترتيب 20 بطاقة لعب عشوائية وأعدها دون خطأ في أقل من دقيقتين`; count3_1++; }
                else {NotificationType = `تحححدي !! `; output = `اكتب قصيدة قصيرة من 4 أبيات في أقل من دقيقة دون توقف`; count3_1 = 1; }

            } else if (roll2 == 2) {// skip
                if (count3_2 == 1) {NotificationType = `تخطي الجولة`; output = `ما نبي نلعب معك ذي اللفه (سكب )`; count3_2++; }
                else if (count3_2 == 2) {NotificationType = `تخطي الجولة`; output = `امممممم سخخن  (سكب )`; count3_2++; }
                else if (count3_2 == 3) {NotificationType = `تخطي الجولة`; output = `معليه تصير تصير  (سكب )`; count3_2++; }
                else if (count3_2 == 4) {NotificationType = `تخطي الجولة`; output = `لا ترفع صوتك طيب (سكب )`; count3_2++; }
                else {NotificationType = `تخطي الجولة`; output = `اخلاقك سيئه عشان كذا (سكب )`; count3_2 = 1; }

            } else if (roll2 == 3) {//punishment
                if (count3_3 == 1) { NotificationType = `عقوبة`; output = `قلد صوت حيوان`; count3_3++; }
                else if (count3_3 == 2) {NotificationType = `عقوبة`;  output = `تمثيل مشهد مضحك`; count3_3++; }
                else if (count3_3 == 3) { NotificationType = `عقوبة`; output = `احمل شيئًا ثقيلًا 20 ثانية`; count3_3++; }
                else if (count3_3 == 4) { NotificationType = `عقوبة`; output = `تكلم دون تحريك شفتيك`; count3_3++; }
                else { NotificationType = `عقوبة`; output = `اقفز على حبل وهمي بسرعة لمدة دقيقتين مع العد بصوت عالٍ من 1 إلى 120 دون أخطاء`; count3_3 = 1; }

            } else if (roll2 == 4) {//question
                if (count3_4 == 1) {NotificationType = `سؤاااال`;  output = `هل تحب الحيوانات؟ ولماذا؟`; count3_4++; }
                else if (count3_4 == 2) {NotificationType = `سؤاااال`;  output = `ما هو أفضل فيلم شاهدته؟ ولماذا؟`; count3_4++; }
                else if (count3_4 == 3) {NotificationType = `سؤاااال`;  output = `ما هو المكان الذي تحلم بزيارته؟`; count3_4++; }
                else if (count3_4 == 4) {NotificationType = `سؤاااال`;  output = `كيف ستتعامل مع اكتشاف أن أقرب شخص لك خانك بطريقة لا تُغتفر؟`; count3_4++; }
                else {NotificationType = `سؤاااال`;  output = `ما هو السر الذي لم تعترف به لأحد أبدًا، ولماذا أبقيته مخفيًا؟`; count3_4 = 1; }

            } else if (roll2 == 5) {// skip
                if (count3_5 == 1) {NotificationType = `تخطي الجولة`; output = `ما نبي نلعب معك ذي اللفه (سكب )`; count3_5++; }
                else if (count3_5 == 2) {NotificationType = `تخطي الجولة`; output = `امممممم سخخن  (سكب )`; count3_5++; }
                else if (count3_5 == 3) {NotificationType = `تخطي الجولة`; output = `معليه تصير تصير  (سكب )`; count3_5++; }
                else if (count3_5 == 4) {NotificationType = `تخطي الجولة`; output = `لا ترفع صوتك طيب (سكب )`; count3_5++; }
                else {NotificationType = `تخطي الجولة`; output = `اخلاقك سيئه عشان كذا (سكب )`; count3_5 = 1; }

            } else { // roll2 == 6   //question
                if (count3_6 == 1) {NotificationType = `سؤاااال`;  output = `ما هو طعامك المفضل؟`; count3_6++; }
                else if (count3_6 == 2) {NotificationType = `سؤاااال`;  output = `متى يكون عيد ميلادك؟`; count3_6++; }
                else if (count3_6 == 3) {NotificationType = `سؤاااال`;  output = `صف نفسك بكلمتين فقط`; count3_6++; }
                else if (count3_6 == 4) {NotificationType = `سؤاااال`;  output = `ما هو أكثر شيء تخاف من فقدانه في حياتك، وكيف ستعيش بدونه؟`; count3_6++; }
                else {NotificationType = `سؤاااال`;  output = `اكثر شخص تكرهه في الجلسة ؟`; count3_6 = 1; }
            }
            break;
        case 4:
            if (roll2 == 1) {// skip
                if (count4_1 == 1) {NotificationType = `تخطي الجولة`; output = `أهاا، هروب سريع! كنت متأكد إنك مش قدها! 😂`; count4_1++; }
                else if (count4_1 == 2) {NotificationType = `تخطي الجولة`; output = ` مش كل الناس عندها الجرأة... وأنت أثبتت ده دلوقتي! 😏`; count4_1++; }
                else if (count4_1 == 3) {NotificationType = `تخطي الجولة`; output = `إيه ده؟ سمعت صوت حد خايف ولا أنا بتخيل؟ 😜`; count4_1++; }
                else if (count4_1 == 4) {NotificationType = `تخطي الجولة`; output = `لو أنا مكانك، كنت عملتها... بس مش كل الناس قوية كفاية! 🤭`; count4_1++; }
                else {NotificationType = `تخطي الجولة`; output = `تاني تهرب؟ شكلك ناوي تخليها عادة! 😆`; count4_1 = 1; }

            } else if (roll2 == 2) {// ask friend
                if (count4_2 == 1) {  NotificationType = `اختار لاعب و اسأله`; output = `كم الساعة الآن دون النظر؟`; count4_2++; }
                else if (count4_2 == 2) { NotificationType = `اختار لاعب و اسأله`;  output = `إذا كنت أملك قوة خارقة، فماذا ستكون؟`; count4_2++; }
                else if (count4_2 == 3) { NotificationType = `اختار لاعب و اسأله`;  output = `ماذا سيكون رد فعلي إذا ربحت مليون دولار؟`; count4_2++; }
                else if (count4_2 == 4) { NotificationType = `اختار لاعب و اسأله`;  output = `ما هو أكثر شيء أندم عليه في حياتي؟`; count4_2++; }
                else {  NotificationType = `اختار لاعب و اسأله`; output = `ماذا كنت سأفعل لو كنت في موقف صعب جدًا؟`; count4_2 = 1; }

            } else if (roll2 == 3) {//challenge
                if (count4_3 == 1) {NotificationType = `تحححدي !! `; output = `احمل ورقة بواسطة أنفك فقط دون استخدام اليدين`; count4_3++; }
                else if (count4_3 == 2) {NotificationType = `تحححدي !! `; output = `تحدث بلغة غير لغتك لمدة 30 ثانية`; count4_3++; }
                else if (count4_3 == 3) {NotificationType = `تحححدي !! `; output = `قم بحركة بهلوانية بسيطة (دوران أو قفزة صغيرة)`; count4_3++; }
                else if (count4_3 == 4) {NotificationType = `تحححدي !! `; output = `قف على رجل واحدة مغمض العينين لمدة 20 ثانية`; count4_3++; }
                else {NotificationType = `تحححدي !! `; output = `اقفز 50 مرة دون توقف`; count4_3 = 1; }

            } else if (roll2 == 4) {//punishment
                if (count4_4 == 1) {NotificationType = `عقوبة`;  output = `قم بمصافحة الجميع في الغرفة بطريقة غريبة`; count4_4++; }
                else if (count4_4 == 2) {NotificationType = `عقوبة`;  output = `كرر جملة يختارها أحد اللاعبين 10 مرات دون خطأ`; count4_4++; }
                else if (count4_4 == 3) {NotificationType = `عقوبة`;  output = `قلد صوت شخصية كرتونية معروفة`; count4_4++; }
                else if (count4_4 == 4) {NotificationType = `عقوبة`;  output = `قفز على رجل واحدة لمسافة 5 أمتار`; count4_4++; }
                else { NotificationType = `عقوبة`; output = `قم بـ 50 تمرين ضغط خلال دقيقة واحدة`; count4_4 = 1; }

            } else if (roll2 == 5) {//punishment 
                if (count4_5 == 1) { NotificationType = `عقوبة`; output = `تحدث ببطء شديد لمدة 30 ثانية`; count4_5++; }
                else if (count4_5 == 2) { NotificationType = `عقوبة`; output = `لا تتحدث لمدة دقيقة كاملة`; count4_5++; }
                else if (count4_5 == 3) {NotificationType = `عقوبة`;  output = `ابقَ في وضعية الجلوس على الهواء (القرفصاء) لمدة 20 ثانية`; count4_5++; }
                else if (count4_5 == 4) { NotificationType = `عقوبة`; output = `قم بتمرين البلانك لمدة 40 ثانية`; count4_5++; }
                else { NotificationType = `عقوبة`; output = `اشرب كوب ماء دون استخدام يديك`; count4_5 = 1; }

            } else { // roll2 == 6   //challenge friend
                if (count4_6 == 1) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يتحدث كأنه روبوت لمدة دقيقة`; count4_6++; }
                else if (count4_6 == 2) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يروي قصة لكنه يستخدم كلمات غير مفهومة`; count4_6++; }
                else if (count4_6 == 3) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يقول 3 نكت خلال دقيقة`; count4_6++; }
                else if (count4_6 == 4) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يذكر 5 حقائق مضحكة عن نفسه`; count4_6++; }
                else {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يذكر 3 أشياء محرجة عن نفسه`; count4_6 = 1; }
            }
            break;
        case 5:
            if (roll2 == 1) {//challenge friend
                if (count5_1 == 1) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يقلدك لمدة دقيقة`; count5_1++; }
                else if (count5_1 == 2) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يقوم بحركة رياضية معينة`; count5_1++; }
                else if (count5_1 == 3) {NotificationType = `اختار لاعب و تحداه `; output = `اجعله يرقص رقصة عشوائية `; count5_1++; }
                else if (count5_1 == 4) {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يروي موقفًا مضحكًا مر به`; count5_1++; }
                else {NotificationType = `اختار لاعب و تحداه `; output = ` اجعله يقف على يديه (أو يحاول)`; count5_1 = 1; }

            } else if (roll2 == 2) {//punishment friend
                if (count5_2 == 1) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يرقص رقصة عشوائية أمام الجميع`; count5_2++; }
                else if (count5_2 == 2) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يروي قصة خيالية غريبة`; count5_2++; }
                else if (count5_2 == 3) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يحفظ 5 أرقام ويعيدها بعد دقيقة`; count5_2++; }
                else if (count5_2 == 4) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يحمل كتابًا فوق رأسه ويمشي دون أن يسقط`; count5_2++; }
                else {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يقرأ نصًا بالمقلوب بصوت عالٍ`; count5_2 = 1; }

            } else if (roll2 == 3) {//dkip
                if (count5_3 == 1) {NotificationType = `تخطي الجولة`; output = `يا رجال! توقعتك أجرأ من كذا، بس شكلك تهرب بسرعة! 😂`; count5_3++; }
                else if (count5_3 == 2) {NotificationType = `تخطي الجولة`; output = `أوه، خلاص ناويها انسحاب؟ شكلك ما تتحمل التحديات! 😏`; count5_3++; }
                else if (count5_3 == 3) {NotificationType = `تخطي الجولة`; output = `وين الحماس؟ مدري ليه حاس إنك كنت بتخسر أصلًا! 🤭`; count5_3++; }
                else if (count5_3 == 4) {NotificationType = `تخطي الجولة`; output = `طيب، بنحسبها لك هالمرة... بس لا تصير دايم تهج! 😆`; count5_3++; }
                else {NotificationType = `تخطي الجولة`; output = `عاد توقعتك أشرس من كذا، بس طلع الموضوع أكبر منك! 😜`; count5_3 = 1; }
            
            } else if (roll2 == 4) {//challenge   
                if (count5_4 == 1) {NotificationType = `تحححدي !! `; output = ` احفظ اسم 3 لاعبين رياضيين وقلها في 10 ثوانٍ`; count5_4++; }
                else if (count5_4 == 2) {NotificationType = `تحححدي !! `; output = ` قم بربط رباط حذائك وأنت مغمض العينينقم بربط رباط حذائك وأنت مغمض العينين`; count5_4++; }
                else if (count5_4 == 3) {NotificationType = `تحححدي !! `; output = ` احفظ جملة طويلة وانطقها دون خطأ بعد 30 ثانية`; count5_4++; }
                else if (count5_4 == 4) {NotificationType = `تحححدي !! `; output = ` احفظ 10 كلمات وأعدها بعد دقيقة دون خطأ`; count5_4++; }
                else {NotificationType = `تحححدي !! `; output = ` قم بتمثيل مشهد درامي وكأنك في فيلم`; count5_4 = 1; }

            } else if (roll2 == 5) {//question
                if (count5_5 == 1) {NotificationType = `سؤاااال`;  output = ` ما هو أفضل كتاب قرأته؟(غيرالقران )`; count5_5++; }
                else if (count5_5 == 2) {NotificationType = `سؤاااال`;  output = ` ما هو أكبر إنجاز حققته في حياتك؟`; count5_5++; }
                else if (count5_5 == 3) {NotificationType = `سؤاااال`;  output = ` ما هو القرار الأصعب الذي اضطررت لاتخاذه؟`; count5_5++; }
                else if (count5_5 == 4) {NotificationType = `سؤاااال`;  output = ` كيف تعتقد أن الآخرين يصفونك؟`; count5_5++; }
                else {NotificationType = `سؤاااال`;  output = ` ما هو الشيء الذي تحاول تجنبه طوال حياتك؟`; count5_5 = 1; }

            } else { // roll2 == 6   //punishment friend
                if (count5_6 == 1) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يقفز على رجل واحدة 10 مرات`; count5_6++; }
                else if (count5_6 == 2) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يقلد صوت شخصية كرتونية`; count5_6++; }
                else if (count5_6 == 3) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يقف في وضعية تمرين القرفصاء لمدة 20 ثانية`; count5_6++; }
                else if (count5_6 == 4) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يقلد شخصًا في الغرفة لمدة 30 ثانية`; count5_6++; }
                else {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يقوم بـ 40 تمرين ضغط خلال دقيقة `; count5_6 = 1; }
            }
            break;
        case 6:
            if (roll2 == 1) {// ask friend
                if (count6_1 == 1) {  NotificationType = `اختار لاعب و اسأله`; output = ` كم عدد الأصابع التي أرفعها (مع تغطية يدك)؟`; count6_1++; }
                else if (count6_1 == 2) { NotificationType = `اختار لاعب و اسأله`;  output = `ماذا أكلت اليوم على الغداء؟ `; count6_1++; }
                else if (count6_1 == 3) {  NotificationType = `اختار لاعب و اسأله`; output = ` هل تستطيع تخمين عمري بدقة؟`; count6_1++; }
                else if (count6_1 == 4) {  NotificationType = `اختار لاعب و اسأله`; output = ` إذا كنت سأختفي ليوم كامل، أين تتوقع أن أكون؟`; count6_1++; }
                else {  NotificationType = `اختار لاعب و اسأله`; output = ` إذا كان لديك خيار لتناول طعام واحد فقط لبقية حياتك، ماذا سيكون؟`; count6_1 = 1; }

            } else if (roll2 == 2) {//question
                if (count6_2 == 1) {NotificationType = `سؤاااال`;  output = ` إذا كان لديك خيار لتناول طعام واحد فقط لبقية حياتك، ماذا سيكون؟`; count6_2++; }
                else if (count6_2 == 2) {NotificationType = `سؤاااال`;  output = ` إذا كان بإمكانك العيش في أي فترة زمنية، أي فترة ستختار؟`; count6_2++; }
                else if (count6_2 == 3) {NotificationType = `سؤاااال`;  output = ` إذا كان بإمكانك تغيير شيء واحد في نفسك، ماذا سيكون؟`; count6_2++; }
                else if (count6_2 == 4) {NotificationType = `سؤاااال`;  output = ` هل هناك شيء ندمت عليه بشدة؟`; count6_2++; }
                else {NotificationType = `سؤاااال`;  output = ` إذا عُرض عليك تغيير هويتك بالكامل، هل ستقبل؟`; count6_2 = 1; }

            } else if (roll2 == 3) {//challenge
                if (count6_3 == 1) {NotificationType = `تحححدي !! `; output = ` ضع ملعقة على جبهتك وحاول ألا تسقط لمدة 10 ثوانٍ`; count6_3++; }
                else if (count6_3 == 2) {NotificationType = `تحححدي !! `; output = ` حاول لمس أنفك بلسانك`; count6_3++; }
                else if (count6_3 == 3) {NotificationType = `تحححدي !! `; output = ` قم بالمشي كالبطريق لمدة 10 ثوانٍ`; count6_3++; }
                else if (count6_3 == 4) {NotificationType = `تحححدي !! `; output = ` ضع قلمًا فوق أذنك دون استخدام يديك`; count6_3++; }
                else {NotificationType = `تحححدي !! `; output = ` قلد حركة مشهورة لشخصية في فيلم`; count6_3 = 1; }

            } else if (roll2 == 4) {//skip
                if (count6_4 == 1) {NotificationType = `تخطي الجولة`; output = `مدري أنت جاي تلعب ولا جاي تتفرج؟! كذا ما لك قيمة بيننا! 👀😂`; count6_4++; }
                else if (count6_4 == 2) {NotificationType = `تخطي الجولة`; output = `طيب دامك خايف، ليش دخلت من البداية؟ تراك طلعت أضحوكة! 🤣🔥`; count6_4++; }
                else if (count6_4 == 3) {NotificationType = `تخطي الجولة`; output = `ههههههههه بالله أحد يعطيه كرسي يرتاح، ما نبيه يتعب وهو يهرب! 😜💺`; count6_4++; }
                else if (count6_4 == 4) {NotificationType = `تخطي الجولة`; output = `يا رجال، خلاص نلقبك ملك الهروب، التحديات ما هي لك أبد! 😂👑`; count6_4++; }
                else {NotificationType = `تخطي الجولة`; output = `بسم الله عليك! وجهك تغير يوم شفت التحدي! هههههههه خايف؟! 🤭`; count6_4 = 1; }

            } else if (roll2 == 5) {//punishment friend
                if (count6_5 == 1) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يتكلم ببطء شديد لمدة 30 ثانية`; count6_5++; }
                else if (count6_5 == 2) {NotificationType = `اختار لاعب و عاقبه`; output = `اجعله يغلق عينيه ويحاول لمس أنفه بإصبعه `; count6_5++; }
                else if (count6_5 == 3) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يعيد بعدك جملة صعبة بسرعة`; count6_5++; }
                else if (count6_5 == 4) {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يحاول حل لغز صعب في 10 ثوانٍ`; count6_5++; }
                else {NotificationType = `اختار لاعب و عاقبه`; output = ` اجعله يمسك كأس ماء ممتلئ ويمشي به دون أن يسكبه`; count6_5 = 1; }

            } else { // roll2 == 6    //ask friend
                if (count6_6 == 1) {NotificationType = `اختار لاعب و اسأله`; output = ` ما هو لون الحذاء الذي أرتديه؟`; count6_6++; }
                else if (count6_6 == 2) {  NotificationType = `اختار لاعب و اسأله`; output = ` ما هو أكبر سر أخفيه؟`; count6_6++; }
                else if (count6_6 == 3) {  NotificationType = `اختار لاعب و اسأله`; output = ` ما هو أول شيء لاحظته عني عندما رأيتني اليوم؟`; count6_6++; }
                else if (count6_6 == 4) {  NotificationType = `اختار لاعب و اسأله`; output = ` ما هو آخر فيلم شاهدته؟`; count6_6++; }
                else {  NotificationType = `اختار لاعب و اسأله`; output = ` ماذا كنت أريد أن أصبح عندما كنت صغيرًا؟`; count6_6 = 1; }
            }
            break;
        default:
            output += `Default case`;
            break;
    }
    Swal.fire({
            title: NotificationType ,
            text: output,
            icon: "info",
            confirmButtonText: "OK"
        });
    
    //document.getElementById("result").innerHTML = output;
}