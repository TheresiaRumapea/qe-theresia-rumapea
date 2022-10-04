package starter.people;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class networkStep {
//  Scenario 01 : see account profile that just connected with me
    @Given("I go to button my network")
    public void iGoToButtonMyNetwork() {
        System.out.println("button network");
    }
    @When("I click accept")
    public void iClickAccept() {
        System.out.println("accept");
    }
    @And("I click the account profile that just connected with me")
    public void iClickTheAccountProfileThatJustConnectedWithMe() {
        System.out.println("click profile");
    }
    @Then("I see the account profile that just connected with me")
    public void iSeeTheAccountProfileThatJustConnectedWithMe() {
        System.out.println("see detail profile");
    }

//  Scenario 02 : see account that i ignored
    @When("I click ignore")
    public void iClickIgnore() {
        System.out.println("click ignore");
    }
    @And("I click the account profile that just ignored by me")
    public void iClickTheAccountProfileThatJustIgnoredByMe() {
        System.out.println("click profile");
    }
    @Then("i see the account profile that just ignored by me")
    public void iSeeTheAccountProfileThatJustIgnoredByMe() {
        System.out.println("see detail profile");
    }
}