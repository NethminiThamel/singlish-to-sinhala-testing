const { test, expect } = require('@playwright/test');


const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    
    {
      tcId: 'Pos_Fun_001',
      name: 'simple past tense  sentence.',
      input: 'heta api eyalage gedhara yanavadha kiyalaa ammaa aehuvaa',
      expected: 'හෙට අපි එයලගෙ ගෙදර යනවද කියලා අම්මා ඇහුවා',
      
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Medium length daily convesation with a request',
      input: 'heta school concert eka thiyanavalu. maath yanna kiyalaa hithan inne. oyath kaemathinam Sithumigenuth ahalaa dhennama enna. oyalaa enavanm mata tikak kalin kiyanna.',
      expected: 'හෙට school concert එක තියනවලු. මාත් යන්න කියලා හිතන් ඉන්නේ. ඔයත් කැමතිනම් සිතුමිගෙනුත් අහලා දෙන්නම එන්න. ඔයලා එනවන්ම් මට ටිකක් කලින් කියන්න.',
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'repeated slang',
      input: 'ela ela',
      expected: 'එල එල',
      
    },
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Convert a medium daily conversation with a question',
      input: 'api heta koheehari yamudha? gedharata velaa iDHalaa matanam dhaen epa velaa inne anee.',
      expected: 'අපි හෙට කොහේහරි යමුද? ගෙදරට වෙලා ඉඳලා මටනම් දැන් එප වෙලා ඉන්නේ අනේ.',
      
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Conversation containing common Sri Lankan name with request ',
      input: 'Hello chamoodhi, mama adha chemistry class yannee naee. mata adha tikak saniipa naee vagee. oyaa gihin enna, puluvannam adha ugannana eevala note eka matath tikak dhenna.',
      expected: 'Hello චමෝදි, මම අද chemistry class යන්නේ නෑ. මට අද ටිකක් සනීප නෑ වගේ. ඔයා ගිහින් එන්න, පුලුවන්නම් අද උගන්නන ඒවල note එක මටත් ටිකක් දෙන්න.',
      
    },
    
    {
      tcId: 'Pos_Fun_006',
      name: 'Compound sentence with question',
      input: 'obee mithurekuta sama thathvayee kenekuta sahoodhara sahoodharayanta hoo maapiyanta yam kisi yoojanavak hoo illiimak karannee keseedha?',
      expected: 'ඔබේ මිතුරෙකුට සම තත්වයේ කෙනෙකුට සහෝදර සහෝදරයන්ට හෝ මාපියන්ට යම් කිසි යෝජනවක් හෝ ඉල්ලීමක් කරන්නේ කෙසේද?',
      
    },
    
   
    {
      tcId: 'Pos_Fun_007',
      name: 'Infromal conversation ',
      input: 'meheta enavaa. haemaveleema kiyanava mooda kathaa kiyanna epaa kiyalaa, haebaeyi karannema eekayi',
      expected: 'මෙහෙට එනවා. හැමවෙලේම කියනව මෝඩ කතා කියන්න එපා කියලා, හැබැයි කරන්නෙම ඒකයි',
      
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Simple past tense sentence',
      input: 'Malli pereedhaa kaduvela gihin aavee.',
      expected: 'මල්ලි පෙරේදා කඩුවෙල ගිහින් ආවේ.',
      
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Complex statement with infromal pattern',
      input: 'kamaknaee, oyalaa gihin enna. maqq kohomath kaemathi naee ehe yanna. iita vaediye hoDHayi gedhara gihin nidhaagannavaa.  maqq aavath naethath eyaalata kisi prashnayak naenee needha?',
      expected: 'කමක්නෑ, ඔයලා ගිහින් එන්න. මං කොහොමත් කැමති නෑ එහෙ යන්න. ඊට වැඩියෙ හොඳයි ගෙදර ගිහින් නිදාගන්නවා.  මං ආවත් නැතත් එයාලට කිසි ප්‍රශ්නයක් නැනේ නේද?',
     
    },
    
   
    {
      tcId: 'Pos_Fun_010',
      name: 'Commen greeting',
      input: 'suBha dhavasak veevaa!',
      expected: 'සුභ දවසක් වේවා!',
    
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Large Singlish statement with commonLy used English words',
      input: 'Adha kaale technology naethuva jiivithee kalpanaa karannath hari amaaruyi. Phone eka, internet eka, apps okkoma daily routines valata sambandha velaa thiyenavaa.  mee dheeval   time waste nokara, hoDHa vidhihata use karoth learning valata loku help ekak. Online tutorials balala aluth skills igena ganna puluvan, communication easy venavaa. Balance ekak thiyaagena use karoth technology eka hoDHa sahayoogayak venavaa. ',
      expected: 'අද කාලෙ technology නැතුව ජීවිතේ කල්පනා කරන්නත් හරි අමාරුයි. Phone එක, internet එක, apps ඔක්කොම daily routines වලට සම්බන්ද වෙලා තියෙනවා.  මේ දේවල්   time waste නොකර, හොඳ විදිහට use කරොත් learning වලට ලොකු help එකක්. Online tutorials බලල අලුත් skills ඉගෙන ගන්න පුලුවන්, communication easy වෙනවා. Balance එකක් තියාගෙන use කරොත් technology එක හොඳ සහයෝගයක් වෙනවා.',
      
    },
    
    
    {
      tcId: 'Pos_Fun_012',
      name: 'Command and question combined with common English words',
      input: 'ohu application eka evala thiyennee maasa dhekakata kalin. oyaa eeka mee dhakvaa mata idhiripath kalee naehae. eekata heethuva mokadhdha kiyalaa oyaata explain karanna puluvandha? Anthimata meevata uththara dhenna venne mata. dhaennama application eka kiyavalaa  eyaata email ekak yavanna.',
      expected: 'ඔහු application එක එවල තියෙන්නේ මාස දෙකකට කලින්. ඔයා ඒක මේ දක්වා මට ඉදිරිපත් කලේ නැහැ. ඒකට හේතුව මොකද්ද කියලා ඔයාට explain කරන්න පුලුවන්ද? අන්තිමට මේවට උත්තර දෙන්න වෙන්නෙ මට. දැන්නම application එක කියවලා  එයාට email එකක් යවන්න.',
      
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Sentence containging currency',
      input: 'ehi mila Rs.4500',
      expected: 'එහි මිල Rs.4500',
     
    },
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Interrogative Statement with date and Place.',
      input: '29 venidhaa eyalaa colombo yanavaa kivvalu, aeyi oyaata kivvee naedhdha?',
      expected: '29 වෙනිදා එයලා colombo යනවා කිව්වලු, ඇයි ඔයාට කිව්වේ නැද්ද?',
    
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Statement contating Common English words and place',
      input: 'next week api family trip ekak yanavaa jaffna valata. dhavas 5k vithara ehee iDHalaa thamayi ennee. oyath enna.',
      expected: 'next week අපි family trip එකක් යනවා jaffna වලට. දවස් 5ක් විතර එහේ ඉඳලා තමයි එන්නේ. ඔයත් එන්න.',
    
    },
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Medium length negation pattern statement',
      input: 'naee naee ehema hoDHa naee nee. ayiyaa kalinma kivvalu api enava kiyalaa. dhaen kohomadha enna venne naee kiyanne. ehema karana eka hari naee. eyalaa goda kaaleka iDHan balan inne, api enakan.  ee nisaa hetama gihin emu. kattiyatama heta 8.00am vedhdhi laeesthi velaa inna kiyanna.',
      expected: 'නෑ නෑ එහෙම හොඳ නෑ නේ. අයියා කලින්ම කිව්වලු අපි එනව කියලා. දැන් කොහොමද එන්න වෙන්නෙ නෑ කියන්නෙ. එහෙම කරන එක හරි නෑ. එයලා ගොඩ කාලෙක ඉඳන් බලන් ඉන්නේ, අපි එනකන්.  ඒ නිසා හෙටම ගිහින් එමු. කට්ටියටම හෙට 8.00am වෙද්දි ලෑස්ති වෙලා ඉන්න කියන්න.',
      
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Common response',
      input: 'obata bohoma sthuthii.',
      expected: 'ඔබට බොහොම ස්තුතී.',
    
    },
    
    
    {
      tcId: 'Pos_Fun_018',
      name: 'Statement including English abbreviations',
      input: 'oyaage phone ekata SMS ekak eevi, eeka tikak kiyanna.',
      expected: 'ඔයාගෙ phone එකට SMS එකක් ඒවි, ඒක ටිකක් කියන්න.',
    
    },
    
    {
      tcId: 'Pos_Fun_019',
      name: 'Sentence containing punctuation marks',
      input: 'anee! matanam hoDHatama mahansii, thava adiyak issarahata ganna baee.',
      expected: 'අනේ! මටනම් හොඳටම මහන්සී, තව අඩියක් ඉස්සරහට ගන්න බෑ.',
  
    },
    

    {
      tcId: 'Pos_Fun_020',
      name: 'Command contains English brand terms',
      input: 'eeka MP3 file ekak vidhihata mata evanna.',
      expected: 'ඒක MP3 file එකක් විදිහට මට එවන්න.',
  
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Future tense sentence with date',
      input: 'heta janavaari 1. apinam heta palli yanavaa.',
      expected: 'හෙට ජනවාරි 1. අපිනම් හෙට පල්ලි යනවා.',
      
    },
    
   
    {
      tcId: 'Pos_Fun_022',
      name: 'English brand terms embeded',
      input: 'viber valata vaediye whatsapp hoDHayi.',
      expected: 'viber වලට වැඩියෙ whatsapp හොඳයි.',
    
    },
    
    {
      tcId: 'Pos_Fun_023',
      name: 'Compound sentense with time format',
      input: 'dhaen velaava 8.00 yi. dhaennama giyothin haebaeyi raee venna kalin yathahaekii.',
      expected: 'දැන් වෙලාව 8.00 යි. දැන්නම ගියොතින් හැබැයි රෑ වෙන්න කලින් යතහැකී.',
     
    },
    

    {
      tcId: 'Pos_Fun_024',
      name: 'Polite request',
      input: 'karuNaakaralaa potha evanna.',
      expected: 'කරුණාකරලා පොත එවන්න.',
    
    }
  ],
  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Singlish pragraph with mixed English words',
      input: 'yaaluvo ekka inna eka nam life ekee best part ekak. loku plans naethi unath podi joke ekak, random trip ekak, late night chat ekak aethi jiivithee sathutin inna. Exam stress, paudhgalika prashna, failures okkoma yaaluvo ekka share karadhdhi hithata podi relief ekak dhaenenavaa. yaaluvo ekka gevapu kaale share karapu stories, secrets, laughs, arguments pavaa kaalekata passe hoDHa memories venava. Ehema mathakath ekka thamayi jivithee thava thavath sundhara venne.',
      expected: 'යාලුවො එක්ක ඉන්න එක නම් life එකේ best part එකක්. ලොකු plans නැති උනත් පොඩි joke එකක්, random trip එකක්, late night chat එකක් ඇති ජීවිතේ සතුටින් ඉන්න. Exam stress, පෞද්ගලික ප්‍රශ්න, failures ඔක්කොම යාලුවො එක්ක share කරද්දි හිතට පොඩි relief එකක් දැනෙනවා. යාලුවො එක්ක ගෙවපු කාලෙ share කරපු stories, secrets, laughs, arguments පවා කාලෙකට පස්සෙ හොඳ memories වෙනව. එහෙම මතකත් එක්ක තමයි ජිවිතේ තව තවත් සුන්දර වෙන්නෙ.',
    
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'spacing error',
      input: 'pissuhaedhilaa',
      expected: 'පිස්සු හැදිලා',
    
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Word not correctly recognised',
      input: 'Maqq podi kaale iDHan Sri Lanka valama thamayi Hitiyee.',
      expected: 'මං පොඩි කාලෙ ඉඳන් ශ්‍රී Lanka වලම තමයි හිටියේ.',
      
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'oyaa samanthava dhaekkadha?\nov eyaa kadee laGata giyaa.',
      expected: 'ඔයා සමන්තව දැක්කද? ඔව් එයා කඩේ ලඟට ගියා.',
  
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'infromal statement with english word',
      input: 'Hi oyaa mokadha  thaniyama innee mokakhari prashnayak nam kiyanna. mata udhav karanna puluvan ekaknam udhavvak dhennam.',
      expected: 'Hi ඔයා මොකද  තනියම ඉන්නේ මොකක්හරි ප්‍රශ්නයක් නම් කියන්න. මට උදව් කරන්න පුලුවන් එකක්නම් උදව්වක් දෙන්නම්.',
      
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'fault in word',
      input: 'api heta game yanna kiyalaa hithan innee',
      expected: 'අපි හෙට ගමේ යන්න කියලා හිතන් ඉන්නේ',
     
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'no space error',
      input: 'kohomahari arayata apegedharath enna kiyanna.',
      expected: 'කොහොමහරි අරයට අපේ ගෙදරත් එන්න කියන්න.',
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Typographical error in words',
      input: 'shishyathva vibaagaya labana maaseta kal gihin kiyalaa vidhuhalpathithumiya kivvaa. oyaata mokadhdha ee gaena hithanne.',
      expected: 'ශිෂ්‍යත්ව විභාගය ලබන මාසෙට කල් ගිහින් කියලා විදුහල්පතිතුමිය කිව්වා. ඔයාට මොකද්ද ඒ ගැන හිතන්නෙ.',
      
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'statement with spacing error',
      input: 'kaalekata kalin monaaunath dhaen eevalin kisima vaedak na.',
      expected: 'කාලෙකට කලින් මොනා උනත් දැන් ඒවලින් කිසිම වැඩක් නැ.',
      
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'missing word error',
      input: 'mama poddak ehaata ennamdha?',
      expected: 'මම පොඩ්ඩක් එහාට ගිහින් එන්නම්ද?  ',
    
    }
  ],
  
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'puqqchi mahaththayaa hoDHa minihaa vunaata mokadha tikak looBhayi. ',
    partialInput: 'puqqchi mahaththayaa hoDHa',
    expectedFull: 'පුංචි මහත්තයා හොඳ මිනිහා වුනාට මොකද ටිකක් ලෝභයි',
    
  }
};


class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}


test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      
      await page.waitForTimeout(1500);
      
      
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      
      await translator.waitForOutput();
      
      
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
