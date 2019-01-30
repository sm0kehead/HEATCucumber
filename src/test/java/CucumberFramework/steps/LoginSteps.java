package CucumberFramework.steps;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class LoginSteps {

    WebDriver driver;

    @Before()
    public void setup() {

        //System.setProperty("webdriver.gecko.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\chromedriver.exe");
        //this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
    }

    @Given("^User navigates to HEAT website$")
    public void user_navigates_to_HEAT_website() throws Throwable {

        driver.get("https://stackoverflow.com/");

    }

    @Given("^User clicks on the login button on homepage$")
    public void user_clicks_on_the_login_button_on_homepage() throws Throwable {
        driver.findElement(By.xpath("//a[contains(@class, 'login-link s-btn btn-topbar-clear py8')]")).click();
        System.out.println("user_clicks_on_the_login_button_on_homepage");


    }

    @Given("^User enters a valid username$")
    public void user_enters_a_valid_username() throws Throwable {
        driver.findElement(By.id("email")).sendKeys("artur.wojtowicz1988@gmail.com");
        System.out.println("user_enters_a_valid_username");


    }

    @Given("^User enters a valid password$")
    public void user_enters_a_valid_password() throws Throwable {
        driver.findElement(By.id("password")).sendKeys("loleczkola2");
        System.out.println("user_enters_a_valid_password");


    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() throws Throwable {
        driver.findElement(By.name("submit-button")).click();
        System.out.println("user_clicks_on_the_login_button");

    }

    @Then("^User should be taken to the successful login page$")
    public void user_should_be_taken_to_the_successful_login_page() throws Throwable {
        Thread.sleep(3000);
        WebElement askQuestionsButton = driver.findElement(By.xpath("//a[contains(text(), 'Ask Question')]"));
        Assert.assertEquals(askQuestionsButton.isDisplayed(), true);
        System.out.println("user_should_be_taken_to_the_successful_login_page");

    }



    /*@After()
    public void teardown() {

        //System.setProperty("webdriver.gecko.driver", "C:\\Users\\ArturWójtowicz\\Documents\\GitHub\\CucumberHEAT2\\src\\test\\java\\CucumberFramework\\resources\\geckodriver.exe");
        driver.quit();
    }*/
}
