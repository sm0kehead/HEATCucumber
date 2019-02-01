package CucumberFramework.Steps.login;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;

import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import static org.testng.Assert.assertEquals;

public class LoginInToAccount {

    WebDriver driver;

    @Before("@chrom")
    public void setupch() {

        //System.setProperty("webdriver.gecko.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @Before("@ff")
    public void setupff() {

        //System.setProperty("webdriver.gecko.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
        System.setProperty("webdriver.gecko.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @After()
    public void tearDown(){
        driver.manage().deleteAllCookies();
        driver.close();
        driver.quit();
    }
    @Given("^I access \"([^\"]*)\"$")
    public void i_access(String url) throws Throwable {
        driver.get(url);
    }

    @When("^I click on the loggin button$")
    public void i_click_on_the_loggin_button() throws Throwable {
        driver.findElement(By.xpath("//h1[contains(text(), 'LOGIN PORTAL')]")).click();

    }

    @And("^I enter a \"([^\"]*)\" username$")
    public void i_enter_a_username(String username) throws Throwable {
//        Set<String> st= driver.getWindowHandles();
//        Iterator<String> it = st.iterator();
//        String parent =  it.next();
//        String child =it.next();
////swtich to parent
//        driver.switchTo().window(parent);
//        System.out.println("Returned to parent");
//// switch to child
//        driver.switchTo().window(child);
//
//       /*String winHandleBefore = driver.getWindowHandle();
//       for (String winHandle : driver.getWindowHandle()) {
//           driver.switchTo().window(winHandle);
//       }*/

        for (String winHandle : driver.getWindowHandles()) {
            driver.switchTo().window(winHandle);
        }

        driver.findElement(By.id("text")).sendKeys(username);

    }
    @And("^I enter a \"([^\"]*)\" password$")
    public void i_enter_a_password(String password) throws Throwable {
        driver.findElement(By.id("password")).sendKeys(password);
    }

    @And("^I click on the login button$")
    public void i_click_on_the_login_button() throws Throwable {
        driver.findElement(By.id("login-button")).click();

    }

    @Then("^prompt alert \"([^\"]*)\"$")
    public void prompt_alert(String message) throws Throwable {    // Write code here that turns the phrase above into concrete actions
        Alert alert = driver.switchTo().alert();
        assertEquals(alert.getText().toString().toLowerCase().replaceAll("\\s", ""), message.toLowerCase().replaceAll("\\s", ""));
        alert.accept();

    }
}
